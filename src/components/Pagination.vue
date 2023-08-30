<template>
<!--  <div class="pagination-row">-->
<!--      <button class="arrow">&lt;-</button>-->
<!--      <span v-for="(item, index) in new Array(10)" :key="index">-->
<!--          <button class="num_page"  @click="paginationClick(index + 1)">{{index + 1}}</button>-->
<!--      </span>-->
<!--      <button class="arrow">-&gt;</button>-->
<!--  </div>-->

</template>

<script>
import All_Icons from "@/components/All_Icons.vue";

export default {
    name: "Pagination",
    // methods: {
    //     paginationClick(index) {
    //         All_Icons.methods.paginationFunc(index)
    //     }
    // },
}
</script>

<style scoped>

.pagination-row {
    margin-left: 540px;
    margin-top: 45px;
    margin-bottom: 150px;
    position: absolute;
}

.arrow {
    border-radius: 6px;
}

.num_page {
    border-radius: 4px;
    margin: 3px;
}

</style>