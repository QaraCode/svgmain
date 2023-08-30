<template>
    <div class="popup">
        <div class="popup_inner">
            <button class="back_toggle" @click="TogglePopup()"></button>
            <slot />
            <div class="title_icon">
                <img :src="icon.url" style="width: 45px; margin: 20px; " alt="">
            </div>
            <div class="keywords" v-for="(item, index) in icon.keywords" :key='index'>
                <template v-if="index < 5">
                <span>{{ item }}</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Popup",
    props: ['TogglePopup'],
    props: {
        TogglePopup: {

        },
        icon: {
            required: true
        }
    },
    data() {

    }
}
</script>

<style scoped>

.popup {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 99;


    display: flex;
    justify-content: center;
    align-items: center;

}

.popup_inner {
    background:   #FFFFFF;
    width: 1000px;
    height: 650px;
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

.back_toggle:hover{
}

</style>