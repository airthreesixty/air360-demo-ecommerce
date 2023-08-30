<template>
  <NuxtLayout>
  <NuxtPage />
  <NoScript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5X2LRBTX"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
</NoScript>
</NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from './store/useCart';

export default defineComponent({
  setup() {
    const state = useCartStore();
    return {state}
  },
  created(){
    this.state.get_cart_products;
  }
})
</script>

