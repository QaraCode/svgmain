<template>
    <div class="input_big">
        <input @keypress.enter="searchInput"
               id="myInput"
               class="gig-input"
               type="search"
               placeholder="search"
               v-model="search">
        <div class="search_svg">
            <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12"
                          stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
        </div>
    </div>

    <div class="icon_box">
        <div @click="() => TogglePopup('buttonTrigger')" class="icons_main" v-for="icon in filteredIcons() "
             :key="icon.id">
            <img :src="icon.url" style="width: 45px; margin: 20px; " alt="">
        </div>
    </div>
    <Popup v-if="popupTriggers.buttonTrigger"
           :TogglePopup="() => TogglePopup('buttonTrigger')">
    </Popup>
    <div class="pag_main">
        <div class="pagination-row">
           <span v-for="(item, index) in sumPage" :key="index">
               <button class="num_page" @click="paginationClick(index + 1)">{{ index + 1 }}</button>
           </span>
        </div>
    </div>

</template>

<script>

import axios from "axios";
import Pagination from "@/components/Pagination.vue";
import Popup from "@/components/Popup.vue";
import {ref} from "@vue/reactivity";


export default {
    name: "All_Icons",
    components: {Popup, Pagination},
    setup() {
        const popupTriggers = ref({
            buttonTrigger: false,
        });

        const TogglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
        }
        
        return {
            Popup,
            popupTriggers,
            TogglePopup
        }
    },


    data() {
        return {
            icons: [],
            search: '',
            currentPage: 1,
            totalIcons: 0,
            totalPages: 0,
            pageSize: 60
        }

    },
    methods: {
        paginationClick(index) {
            this.paginationFunc(index)
        },

        async getIcons() {
            const {data} = await axios.get("https://svg.q19.kz/api/v1/icons/", {
                params: {
                    limit: this.pageSize,
                    keyword: this.search.toLowerCase(),
                    page: this.currentPage

                }
            })
            console.log("res", data)
            this.icons = data.data
            this.totalIcons = data.total;
        },

        async searchInput(event) {
            this.currentPage = 1
            await this.getIcons();
            this.filteredIcons();
        },
        filteredIcons() {
            // this.getIcons()
            return this.icons
        },
        async paginationFunc(index) {
            this.currentPage = index
            console.log("Success", this.currentPage);
            await this.getIcons()
            this.filteredIcons()
        },


    },
    computed: {
        sumPage() {
            this.totalPages = Math.ceil(this.totalIcons / this.pageSize)
            console.log(this.totalPages)
            if (this.totalPages <= 10) {
                const arr = new Array(this.totalPages)
                return arr
            }
            else if (this.totalPages > 10) {
                const arr = new Array(10)
                return arr
            }
        }
    },
    async created() {
        await this.getIcons()
        this.filteredIcons()
    },
}
</script>

<style scoped>


.icon_box {
    width: 1200px;
    height: max-content;
    border: none;
    margin-top: 20px;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 120px;
    margin-bottom: 45px;

}

.icons_main {
    background-color: snow;
    border: 3px solid darkgray;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 15px;
    z-index: 98;
    cursor: pointer;

}

.search_svg {
    position: absolute;
    margin-left: 125px;
    margin-top: -5px;
}

.pagination-row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pag_main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}


.num_page {
    border-radius: 4px;
    margin: 3px;
    border: solid 1px #f1f1f1;
    background: none;
    color: white;
    font-size: 22px;
    font-weight: 800;
}

.num_page:hover {
    background-color: snow;
    color: #222222;
}


</style>