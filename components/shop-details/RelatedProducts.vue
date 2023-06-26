<template>
  <section class="related__product pb-60">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2>{{ $t('details.related-products.title') }}</h2>
            </div>
            <div class="section__sub-title">
              <p>
                {{ $t('details.related-products.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(prdItem, i) in state.getRelatedProducts(item.category,item.id)"
          :key="i"
          class="col-xl-3 col-lg-3 col-md-6 col-sm-6"
        >
          <product-item :item="prdItem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductItem from '../products/ProductItem.vue'
import ProductType from '~~/types/productType'
import { useProductsStore } from '~~/store/useProducts'

export default defineComponent({
  components: { ProductItem },
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    },
  },
  setup (props) {
    const state = useProductsStore()
    return { state }
  },
})
</script>
