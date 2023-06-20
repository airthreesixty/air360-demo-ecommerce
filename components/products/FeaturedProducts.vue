<template>
  <div class="product__slider-area pt-95 pb-60">
    <div class="container custom-container-2">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__wrapper text-center">
            <h3 class="section__title-2">
              <span>{{ $t('featured-products.title') }}</span>
            </h3>
            <p>{{ $t('featured-products.description') }}</p>
          </div>
        </div>
      </div>
      <div class="row mt-40">
        <div class="col-lg-12">
          <div class="product__slider-active p-relative">
            <Carousel
              ref="slider_1"
              :items-to-show="3"
              :wrap-around="true"
              :breakpoints="{
                1200: {
                  itemsToShow: 3,
                },
                992: {
                  itemsToShow: 3,
                },
                700: {
                  itemsToShow: 2,
                },
                0: {
                  itemsToShow: 1,
                },
              }"
            >
              <Slide
                v-for="(item, i) in products"
                :key="i"
                class="product__slider-item"
              >
                <div class="product__item mb-40">
                  <product-item-two :item="item" />
                </div>
              </Slide>
            </Carousel>
            <div class="owl-nav">
              <div class="owl-prev" @click="handlePrev">
                <button><i class="fal fa-angle-left" /></button>
              </div>
              <div class="owl-next" @click="handleNext">
                <button><i class="fal fa-angle-right" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// external
import { Carousel, Slide } from 'vue3-carousel'
import { defineComponent } from 'vue'
// internal
import ProductItemTwo from './ProductItemTwo.vue'
import { useProductsStore } from '~~/store/useProducts'
// interface
interface sliderRef {
  next(): void;
  prev(): void;
}

export default defineComponent({
  components: { ProductItemTwo, Carousel, Slide },
  setup () {
    const store = useProductsStore()
    const products = store.products.filter(p => p.bestSeller).filter(p => !p.big_img)
    return {
      products,
    }
  },
  methods: {
    handleNext () {
      const sliderRef = this.$refs.slider_1 as sliderRef
      sliderRef.next()
    },
    handlePrev () {
      const sliderRef = this.$refs.slider_1 as sliderRef
      sliderRef.prev()
    },
  },
})
</script>

<style scoped>
.product__slider-area .carousel__slide.product__slider-item {
  padding: 0 15px;
}
</style>
