<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link :href="`/product-details/${item.id}`">
        <img :src="item.img" alt="">
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link :href="`/product-details/${item.id}`">
        {{ $t(`${item.title}.title`) }}
      </nuxt-link>
    </td>
    <td class="product-price">
      <span class="amount">${{ item.price }}</span>
    </td>
    <td class="product-quantity" @click.prevent="cartState.add_cart_product(item, $t(`${item.title}.title`), $t('added-to-cart'))">
      <button class="os-btn os-btn-black" type="submit">
        {{ $t('wishlist.add-to-cart') }}
      </button>
    </td>
    <td class="product-subtotal">
      <span class="amount">${{ item.price }}</span>
    </td>
    <td class="product-remove" @click.prevent="wishlistState.removeWishlist(item)">
      <a href="#">
        <i class="fa fa-times" />
      </a>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductType from '~~/types/productType'
import { useCartStore } from '~~/store/useCart'
import { useWishlistStore } from '~~/store/useWishlist'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    },
  },
  setup () {
    const cartState = useCartStore()
    const wishlistState = useWishlistStore()
    return { cartState, wishlistState }
  },
})
</script>
