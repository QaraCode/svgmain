<template>
    <div class="popup">
        <div class="popup_inner">
            <button class="back_toggle" @click="TogglePopup()"></button>
            <slot/>
            <div class="title_icon">
                <img :src="icon.url" class="icon_img" alt="">
            </div>
            <div class="cont_key">
                <div class="keywords" v-for="(item, index) in icon.keywords" :key='index'>
                    <template v-if="index < 6">
                        <span class="keyword_sum_1">
                           <span class="knopka">
                                  <button class="delete_key">
                                     <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg"><path
                                        d="M905.92 237.76a32 32 0 0 0-52.48 36.48A416 416 0 1 1 96 512a418.56 418.56 0 0 1 297.28-398.72 32 32 0 1 0-18.24-61.44A480 480 0 1 0 992 512a477.12 477.12 0 0 0-86.08-274.24z"
                                        fill="#231815"/><path
                                        d="M630.72 113.28A413.76 413.76 0 0 1 768 185.28a32 32 0 0 0 39.68-50.24 476.8 476.8 0 0 0-160-83.2 32 32 0 0 0-18.24 61.44zM489.28 86.72a36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 37.12 37.12 0 0 0 10.56-6.72A32 32 0 0 0 544 64a33.6 33.6 0 0 0-9.28-22.72A32 32 0 0 0 505.6 32a20.8 20.8 0 0 0-5.76 1.92 23.68 23.68 0 0 0-5.76 2.88l-4.8 3.84a32 32 0 0 0-6.72 10.56A32 32 0 0 0 480 64a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56zM726.72 297.28a32 32 0 0 0-45.12 0l-169.6 169.6-169.28-169.6A32 32 0 0 0 297.6 342.4l169.28 169.6-169.6 169.28a32 32 0 1 0 45.12 45.12l169.6-169.28 169.28 169.28a32 32 0 0 0 45.12-45.12L557.12 512l169.28-169.28a32 32 0 0 0 0.32-45.44z"
                                        fill="#231815"/></svg>
                                  </button>
                                  <button class="delete_key" @click="editIcon(item)">
                                     <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"><path
                                         d="M930.56 192l-138.56-133.12A91.84 91.84 0 0 0 723.52 32a96 96 0 0 0-67.2 29.44L124.48 615.04a32 32 0 0 0-5.76 8.96V628.8L32 947.84a32 32 0 0 0 32 40 32 32 0 0 0 9.28 0l314.88-96h4.48a32 32 0 0 0 8.64-6.08l176.96-184.32a32 32 0 0 0-46.08-44.16l-155.2 160L192 636.48 704 105.92a32 32 0 0 1 22.4-9.92 33.92 33.92 0 0 1 22.72 8.96l138.56 133.12a32 32 0 0 1 0 45.12l-23.68 23.04A32 32 0 0 0 911.04 352l22.08-23.04A96 96 0 0 0 930.56 192zM108.8 908.48l55.68-210.24 152.32 146.24z"
                                         fill="#231815"/><path
                                         d="M688.32 462.72l-66.56 69.12A32 32 0 1 0 668.16 576L736 507.2a32 32 0 0 0-46.08-44.16zM822.72 369.92a32 32 0 0 0-45.12 0 32 32 0 0 0-7.04 10.56A32 32 0 0 0 777.6 416a32 32 0 0 0 22.4 9.28 32 32 0 0 0 12.48-2.24 32 32 0 0 0 10.24-7.04 32 32 0 0 0 7.04-34.88 38.4 38.4 0 0 0-7.04-11.2z"
                                         fill="#231815"/>
                                </svg>
                                  </button>
                           </span>
                                     {{ item }}
                        </span>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Popup",
    props: {
        TogglePopup: {},
        icon: {
            required: true
        }
    },
    data() {

    },
    methods: {
        async editIcon(keyword) {
            console.log("EDIT");
        }
    },

}
</script>

<style scoped>

.popup {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99;


    display: flex;
    justify-content: center;
    align-items: center;

}

.popup_inner {
    background: #FFFFFF;
    width: 600px;
    height: 550px;
    border: none;
    border-radius: 22px;

}


.back_toggle {
    border: none;
    background: #de1818;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    float: right;
    margin-right: 25px;
    margin-top: 15px;
}

.cont_key {
    margin-left: 70px;
    margin-top: 55px;
    display: flex;
    flex-wrap: wrap ;
    flex-direction: row;
    gap: 30px;
    font-size: 18px;
    width: 480px;
    height: min-content;
}

.keyword_sum_1 {
    border: none;
    background-color: #f1f1f1;
    color: black;
    border-radius: 12px;
    padding: 8px 38px 8px 8px;
    display: flex;
    align-items: center;
}

.knopka {
    display: flex;
}

.icon_img {
    width: 125px;
    margin-top: 75px;
    margin-left: 235px;
}

.delete_key {
    border-radius: 100%;
    border: none;
    color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>