<script setup>
import { RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import SideBar from './views/SideBar.vue';
import CartPopup from './components/CartPopup.vue';

</script>

<template>
  <div class="wrapper">
    <SideBar></SideBar>
    <CartPopup></CartPopup>
    <div class="content">
      <HeaderComp ref="HeaderComp"></HeaderComp>

      <main class="mt-3">
        <RouterView />
      </main>

      <FooterComp></FooterComp>  
    </div>
  </div>
</template>

<style scoped>
@media(max-width:992px){
  .wrapper {
    display: flex;
  }
}
</style>
