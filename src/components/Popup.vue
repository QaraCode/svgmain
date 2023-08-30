<template>
  <div class="popup">
      <div class="popup_inner">
          <button class="back_toggle" @click="TogglePopup()"></button>
          <slot />

          <div class="title_icon" >

          </div>

      </div>
  </div>
</template>

<script>



export default {
    name: "Popup",
    props: ['TogglePopup',],
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
    background: red;
}

</style>