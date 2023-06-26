<template>
  <div class="mini-cart">
    <div v-if="store.cart_products.length === 0">
      <h5>{{ $t('nav.cart.empty') }}</h5>
    </div>
    <div v-if="store.cart_products.length > 0" class="mini-cart-inner">
      <ul
        :class="`mini-cart-list ${store.cart_products.length === 1 ? 'slider-height_1' :
          store.cart_products.length === 2 ? 'slider-height_2' : 'slider-height'}`"
      >
        <li v-for="(item,i) in store.cart_products" :key="i">
          <div class="cart-img f-left">
            <nuxt-link :to="localePath(`/product-details/${item.id}`)">
              <img :src="item.img" alt="">
            </nuxt-link>
          </div>
          <div class="cart-content f-left text-left">
            <h5>
              <nuxt-link :to="localePath(`/product-details/${item.id}`)">
                <!-- <span v-html="item.title" /> -->
                <span>{{ $t(`${item.title}.title`) }}</span>
              </nuxt-link>
            </h5>
            <div class="cart-price">
              <span class="ammount">{{ item.orderQuantity }}<i class="fal fa-times" /></span>
              <span class="price">$ {{ item.price }}</span>
            </div>
          </div>
          <div class="del-icon f-right mt-30" @click="store.remover_cart_products(item, $t(`${item.title}.title`), $t('remove-from-cart'))">
            <a href="#">
              <i class="fal fa-times" />
            </a>
          </div>
        </li>
      </ul>
      <div class="total-price d-flex justify-content-between mb-30">
        <span>{{ $t('cart-mini.subtotal') }}:</span>
        <span>${{ store.totalPriceQuantity.total.toFixed(2) }}</span>
      </div>
      <div class="checkout-link">
        <nuxt-link :to="localePath('/cart')" class="os-btn">
          {{ $t('cart-mini.view-cart') }}
        </nuxt-link>
        <nuxt-link class="os-btn os-btn-black" :to="localePath('/checkout')">
          {{ $t('cart-mini.checkout') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '~~/store/useCart'

export default defineComponent({
  setup () {
    const store = useCartStore()
    const localePath = useLocalePath()
    return { store, localePath }
  },
})
</script>
