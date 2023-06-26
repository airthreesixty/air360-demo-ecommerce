<template>
  <div class="product__wrapper">
    <div class="product__thumb">
      <nuxt-link :to="localePath(`/product-details/${item.id}`)" class="w-img">
        <img :src="item.img" alt="product-img">
        <!-- <img class="product__thumb-2" :src="item.thumb_img" alt="product-img"> -->
      </nuxt-link>
      <div class="product__action-3 transition-3">
        <a href="#" class="action-btn" @click.prevent="store.add_cart_product(item, $t(`${item.title}.title`), $t('added-to-cart'))">
          <i class="fal fa-plus" />{{ $t('details.add-to-cart') }}
        </a>
        <a href="#" class="action-btn" data-bs-toggle="modal" :data-bs-target="`#productModalId-${item.id}`" @click.prevent="store.initialOrderQuantity">
          <i class="fal fa-eye" />
        </a>
      </div>
      <div v-if="item.sale_of_per || item.new" class="product__sale product__sale-3">
        <span v-if="item.new || item.sale_of_per" class="new">new</span>
        <span v-if="item.sale_of_per" class="percent">-{{ item.sale_of_per }}%</span>
      </div>
    </div>
    <div class="product__content product__content-2 p-relative text-center">
      <div class="product__content-inner">
        <div class="rating">
          <a href="#"><i class="fal fa-star" /></a>
          <a href="#"><i class="fal fa-star" /></a>
          <a href="#"><i class="fal fa-star" /></a>
          <a href="#"><i class="fal fa-star" /></a>
          <a href="#"><i class="fal fa-star" /></a>
        </div>
        <h4>
          <nuxt-link :to="localePath(`/product-details/${item.id}`)">
            <!-- <span v-html="item.title" /> -->
            <span>{{ $t(`${item.title}.title`) }}</span>
          </nuxt-link>
        </h4>
        <div class="product__price-3">
          <span>${{ item.price.toFixed(2) }}</span>
          <span v-if="item.old_price" class="old-price"><del>${{ item.old_price }}</del></span>
        </div>
      </div>
    </div>
  </div>

  <!-- product modal start -->
  <product-modal :item="item" />
  <!-- product modal end -->
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductModal from '../common/modals/ProductModal.vue'
import ProductType from '~/types/productType'
import { useCartStore } from '~~/store/useCart'

export default defineComponent({
  components: { ProductModal },
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    },
  },
  setup () {
    const store = useCartStore()
    const localePath = useLocalePath()
    return { store, localePath }
  },
})
</script>
