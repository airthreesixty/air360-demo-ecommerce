<template>
  <div class="testimonial__area grey-bg pt-95 pb-95">
    <div class="container custom-container-2">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-xl-12">
              <div class="section__wrapper text-center mb-40">
                <h3 class="section__title-2">
                  {{ $t('testimonials.title') }}
                </h3>
                <p class="sub-title">
                  {{ $t('testimonials.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <Carousel ref="slider_1" :items-to-show="1" :wrap-around="true" class="testimonial__slider-active">
            <Slide
              v-for="item in testimonial_data"
              :key="item.id"
              class="testimonail__slider-item"
            >
              <div class="testimonial__image text-center mb-50">
                <img :src="item.img" alt="">
              </div>
              <div class="testimonial__content">
                <p v-html="item.desc" />
              </div>
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
// internal
import user_1 from '~/assets/img/testimonial/testi1.webp'
import user_2 from '~/assets/img/testimonial/testi2.webp'
import user_3 from '~/assets/img/testimonial/testi3.webp'

// testimonial data interface
interface TestimonialDataType {
  id:number,
  img:string,
  desc:string,
}

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  setup () {
    const { t } = useI18n()
    const testimonial_data = ref<TestimonialDataType[]>([
      {
        id: 1,
        img: user_1,
        desc: t('testimonials.testimonial1'),
      },
      {
        id: 2,
        img: user_2,
        desc: t('testimonials.testimonial2'),
      },
      {
        id: 3,
        img: user_3,
        desc: t('testimonials.testimonial3'),
      },
    ])
    return { testimonial_data }
  },
})
</script>

<style scoped>
  .carousel__slide {
	  display: block;
  }
</style>
