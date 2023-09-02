<template>
    <div class="input_big">
        <input @input="showHints" @keypress.enter="searchInput"
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
    <template v-if="hintbool">
        <div v-if="search" class="hints_main">
            <div class="hints_inner" @click="hintSearch(item.title)" v-for="item in hints" :key="item.id">
                <span>{{item.title}}</span>
            </div>
        </div>
    </template>
    <div class="icon_box">
        <div @click="() => {TogglePopup('buttonTrigger'); saveIcon(icon)}" class="icons_main" v-for="icon in filteredIcons()"
             :key="icon.id">
            <img :src="icon.url" style="width: 45px; margin: 20px; " alt="">

        </div>
    </div>
    <Popup :icon="icon" v-if="popupTriggers.buttonTrigger"
           :TogglePopup="() => TogglePopup('buttonTrigger')">
    </Popup>
    <div class="pag_main">
        <div class="pagination-row">
            <button class="pag_prev" v-if="currentPage != 1" @click="prevPage()">Previous</button>
            <span v-for="(item, index) in sumPage" :key="index">
               <button class="num_page" @click="paginationClick(item)" :class="numFunc(item)" v-if="item >= this.currentPage - 4">{{ item }}</button>
            </span>
            <button class="pag_next" v-if="currentPage != totalPages" @click="nextPage()">Next</button>
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
            pageSize: 60,
            icon: [],
            hints: [],
            hintbool: true
        }

    },
    methods: {
        async getHints() {
            const {data} = await axios.get("https://svg.q19.kz/api/v1/keywords/", {
                params: {
                    title: this.search.toLowerCase(),
                    limit: 5
                }
            })
            this.hints = data.data
        },
        async showHints() {
            await this.getHints()
                if(this.hints.length > 0) {
                    this.hintbool = true
                    console.log(true);
                }
                else if (this.hints.length == 0) {
                    this.hintbool = false
                    console.log(false);
                }
            return this.hints
        },
        hintSearch(title) {
            this.search = title
            this.searchInput()
            this.hintbool = false
        },
        saveIcon(icon) {
            this.icon = icon
        },
        prevPage() {
            this.paginationFunc(this.currentPage - 1)
        },
        nextPage() {
            this.paginationFunc(this.currentPage + 1)
        },

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
            // console.log("res", data)
            this.icons = data.data
            this.totalIcons = data.total;
        },

        async searchInput(event) {
            this.currentPage = 1
            this.hintbool = false
            await this.getIcons();
            this.filteredIcons();
        },
        filteredIcons() {
            // this.getIcons()
            return this.icons
        },
        async paginationFunc(index) {
            this.currentPage = index
            // console.log("Success", this.currentPage);
            await this.getIcons()
            this.filteredIcons()
        },
        numFunc(num) {
            if(num == this.currentPage) {
                return 'active'
            }
            else {
                return 'non-active'
            }
        }

    },
    computed: {
        sumPage() {
            this.totalPages = Math.ceil(this.totalIcons / this.pageSize)
            // console.log(this.totalPages)
            if (this.totalPages <= 9) {
                return this.totalPages
            }
            else if (this.totalPages > 9) {
                if(this.currentPage+4 <= this.totalPages) {
                    return this.currentPage + 4
                }
                else {
                    return this.totalPages
                }
            }
        }
    },
    async created() {
        await this.getIcons()
        this.filteredIcons()
    },
    mounted () {
        if(localStorage.search) {
            this.search = localStorage.search
            this.searchInput()
        }
    },
    watch: {
        search(newSearch) {
            localStorage.search = newSearch
        }
    }
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

.hints_main {
    width: 300px;
    height: fit-content;
    position: absolute;
    z-index: 99;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    left: 165px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 10px 30px;
    padding: 16px;
}

.hints_inner{
    margin-top: 5px;
}

.hints_inner:hover {
    cursor: pointer;
}

.hints_inner span {
    font-size: 18px;
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


.num_page, .pag_prev, .pag_next {
    border-radius: 4px;
    margin: 7px;
    border: solid 1px #f1f1f1;
    background: none;
    font-size: 22px;
    font-weight: 800;
    color: white;
}

.num_page:hover, .pag_prev:hover, .pag_next:hover {
    background-color: snow;
    color: #222222;
}

.num_page.active {
    background-color: snow;
    color: #222222;
}


</style>