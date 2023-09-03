<template>
    <div class="pag_main">
        <div class="pagination-row">
            <button class="pag_prev" v-if="currentPage != 1" @click="prevPage()" :style="{backgroundColor: bgcolor, color: color}">Previous</button>
            <span v-for="(item, index) in sumPage" :key="index">
               <button class="num_page" @click="paginationClick(item)" :class="numFunc(item)" v-if="item >= currentPage - 4">{{ item }}</button>
            </span>
            <button class="pag_next" v-if="currentPage != totalPages" @click="nextPage()" :style="{backgroundColor: bgcolor, color: color}">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        currentPage: {
            required: true
        },
        totalItems: {
            required: true
        },
        pageLim: {
            required: true
        },
        bgcolor: {
    
        },
        color: {
            
        }
    },
    data() {
        return {
            totalPages: 0
        }
    },
    computed: {
        sumPage() {
            this.totalPages = Math.ceil(this.totalItems / this.pageLim)
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
    methods: {
        numFunc(num) {
            if(num == this.currentPage) {
                return 'active'
            }
            else {
                return 'non-active'
            }
        },
        prevPage() {
            this.paginationFunc(this.currentPage - 1)
            // this.$emit('prev', this.currentPage - 1)
        },
        nextPage() {
            this.paginationFunc(this.currentPage + 1)
        },
        paginationClick(index) {
            this.paginationFunc(index)
        },
        paginationFunc(index) {
            this.$emit('create', index)
            // await this.getIcons()
            // this.filteredIcons()
        },
    },

}
</script>

<style scoped>

/* .pagination-row {
    margin-left: 540px;
    margin-top: 45px;
    margin-bottom: 150px;
    position: absolute;
} */
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
}

.num_page {
    border-radius: 4px;
    margin: 7px;
    border: solid 1px #f1f1f1;
    background: none;
    font-size: 22px;
    font-weight: 800;
    color: white;
}
.pag_prev, .pag_next {
    border-radius: 4px;
    margin: 7px;
    border: solid 1px #f1f1f1;
    font-size: 22px;
    font-weight: 800;
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