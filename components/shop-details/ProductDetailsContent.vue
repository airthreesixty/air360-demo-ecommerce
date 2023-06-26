<template>
  <div :class="`product__modal-content ${style_2?'product__modal-content-2':''}`">
    <h4>
      <nuxt-link :href="`/product-details/${item.id}`">
        <span>{{ $t(`${item.title}.title`) }}</span>
      </nuxt-link>
    </h4>
    <div class="rating rating-shop mb-15">
      <ul>
        <li><span><i class="fas fa-star" /></span></li>
        <li><span><i class="fas fa-star" /></span></li>
        <li><span><i class="fas fa-star" /></span></li>
        <li><span><i class="fas fa-star" /></span></li>
        <li><span><i class="fal fa-star" /></span></li>
      </ul>
      <span class="rating-no ml-10">
        {{ item.rating }}
      </span>
    </div>
    <div class="product__price-2 mb-25">
      <span>${{ item.price.toFixed(2) }}</span>
      <span v-if="item.old_price" class="old-price">${{ item.old_price }}</span>
    </div>
    <div class="product__modal-des mb-30">
      <p>{{ $t(`${item.sm_desc}`) }}</p>
    </div>
    <div class="product__modal-form">
      <form action="#">
        <div class="product__modal-input size mb-20">
          <label>{{ $t('details.size') }} <i class="fas fa-star-of-life" /></label>
          <select>
            <option>- {{ $t('details.please-select') }} -</option>
            <option v-for="(size,i) in item.sizes" :key="i">
              {{ size }}
            </option>
          </select>
        </div>
        <div class="product__modal-input color mb-20">
          <label>{{ $t('details.color') }} <i class="fas fa-star-of-life" /></label>
          <select>
            <option>- {{ $t('details.please-select') }} -</option>
            <option v-for="(clr,i) in item.colors" :key="i">
              {{ clr }}
            </option>
          </select>
        </div>
        <div class="product__modal-required mb-5">
          <span>{{ $t('details.required') }} *</span>
        </div>
        <div class="pro-quan-area d-lg-flex align-items-center">
          <div class="product-quantity-title">
            <label>{{ $t('details.quantity') }}</label>
          </div>
          <div class="product-quantity">
            <div class="cart-plus-minus">
              <input v-model="state.orderQuantity" type="text">
              <div class="dec qtybutton" @click="state.orderQuantity > 1 ? state.orderQuantity-- : state.orderQuantity = 1">
                -
              </div>
              <div class="inc qtybutton" @click="state.orderQuantity++">
                +
              </div>
            </div>
          </div>
          <div class="pro-cart-btn ml-20">
            <a
              href="#"
              class="os-btn os-btn-black os-btn-3 mr-10"
              @click.prevent="state.add_cart_product(item, $t(`${item.title}.title`), $t('added-to-cart'))"
            >+ {{ $t('details.add-to-cart') }}</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductType from '~~/types/productType'
import { useCartStore } from '~~/store/useCart'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    },
    style_2: {
      type: Boolean,
      default: false,
    },
  },

  setup () {
    const state = useCartStore()
    return { state }
  },
})
</script>
