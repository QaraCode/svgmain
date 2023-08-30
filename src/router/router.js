import {createRouter, createWebHashHistory} from "vue-router";

import Home from "@/components/Home.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import SearchBox from "@/components/SearchBox.vue";
import All_Icons from "@/components/All_Icons.vue";
import Faced from "@/components/Faced.vue";
import InputMain from "@/components/InputMain.vue";
import Footer from "@/components/Footer.vue";
import Pagination from "@/components/Pagination.vue";
import Popup from "@/components/Popup.vue";





function page() {

}

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: Home},
        {path: '/box', component: BoxIcon},
        // {path: '/search', component: SearchBox},
        {path: '/icons', component: All_Icons},
        {path: '/faced', component: Faced},
        {path: '/input', component: InputMain},
        {path: '/footer', component: Footer},
        // {path: '/pag', component: Pagination},
        {path: '/popup', component: Popup},

    ]
})