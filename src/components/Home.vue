<template>


  <Faced />

    <InputMain />

  <All_Icons />




</template>

<script>

import BoxIcon from "@/components/BoxIcon.vue";
import SearchBox from "@/components/SearchBox.vue";
import All_Icons from "@/components/All_Icons.vue";
import Faced from "@/components/Faced.vue";
import InputMain from "@/components/InputMain.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {Footer, InputMain, Faced, All_Icons, BoxIcon, }
}
</script>

<style scoped>



</style>