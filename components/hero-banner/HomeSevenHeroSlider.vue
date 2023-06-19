<template>
  <section class="slider__area slider__area-3 tp_hero p-relative">
    <div class="slider-active-3">
      <Carousel ref="slider_1" :items-to-show="1" :wrap-around="true">
        <Slide
          v-for="item in slider_data"
          :key="item.id"
          class="single-slider single-slider-2 slider__height-6 d-flex align-items-center"
          :style="{ backgroundImage: `url(${item.bgImg})` }"
        >
          <div class="container custom-container-2">
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-10">
                <div class="slider__content slider__content-5">
                  <span :class="`${item.meta?'meta':''}`">{{ item.sm_title }}</span>
                  <h2 v-html="item.title" />
                  <p v-html="item.subtitle" />
                  <nuxt-link :to="localePath('/shop')" class="os-btn-4 hero-slider-btn">
                    {{ $t('shop-now') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <div>
        <button type="button" class="slick-prev slick-arrow" @click="handlePrev">
          <i class="fal fa-angle-left" />
        </button>
        <button type="button" class="slick-next slick-arrow" @click="handleNext">
          <i class="fal fa-angle-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
// external
import { HeroSliderTypeThree } from '~/types/HeroSliderDataType'
import slider_img_1 from '~/assets/img/slider/05/slide111.webp'
import slider_img_2 from '~/assets/img/slider/05/slide112.webp'
import slider_img_3 from '~/assets/img/slider/05/slide113.webp'

// interface
interface sliderRef {
  next(): void;
  prev(): void;
}

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  setup () {
    const { t } = useI18n()
    const localePath = useLocalePath()
    const slider_data = ref<HeroSliderTypeThree[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        sm_title: t('slider1.sm-title'),
        meta: true,
        title: t('slider1.title'),
        subtitle: t('slider1.desc'),
      },
      {
        id: 2,
        bgImg: slider_img_2,
        sm_title: t('slider2.sm-title'),
        title: t('slider2.title'),
        subtitle: t('slider2.desc'),
      },
      {
        id: 3,
        bgImg: slider_img_3,
        sm_title: t('slider3.sm-title'),
        title: t('slider3.title'),
        subtitle: t('slider3.desc'),
      },
    ])
    return { slider_data, localePath }
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
