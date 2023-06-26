<template>
  <section class="shop__area pb-65">
    <div class="shop__top grey-bg-6 pt-100 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="product__modal-box d-flex">
              <div class="product__modal-nav mr-20">
                <nav>
                  <div id="product-details" class="nav nav-tabs" role="tablist">
                    <button
                      v-for="(img, i) in item.related_images"
                      :key="i"
                      :class="`nav-item nav-link ${ img === active_img ? 'active' : '' }`"
                      style="margin-bottom: 5px;"
                      @click="handleActiveImg(img)"
                    >
                      <div class="product__nav-img w-img">
                        <img
                          :src="img"
                          alt="image"
                          style="width: 95px; height: 120px;object-fit: cover;"
                        >
                      </div>
                    </button>
                  </div>
                </nav>
              </div>
              <div id="product-detailsContent" class="tab-content mb-20">
                <div class="product__modal-img product__thumb w-img">
                  <img :src="active_img" alt="product_img">
                  <div class="product__sale ">
                    <span class="new">new</span>
                    <span class="percent">-16%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <product-details-content :item="item" :style_2="true" />
          </div>
        </div>
      </div>
    </div>
    <div class="shop__bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="product__details-tab">
              <div class="product__details-tab-nav text-center mb-45">
                <nav>
                  <div id="pro-details" class="nav nav-tabs justify-content-start justify-content-sm-center" role="tablist">
                    <a
                      id="des-tab"
                      class="nav-item nav-link active"
                      data-bs-toggle="tab"
                      href="#des"
                      role="tab"
                      aria-controls="des"
                      aria-selected="true"
                    >{{ $t('details.description') }}</a>
                    <a
                      id="add-tab"
                      class="nav-item nav-link"
                      data-bs-toggle="tab"
                      href="#add"
                      role="tab"
                      aria-controls="add"
                      aria-selected="false"
                    >{{ $t('details.additional-information') }}</a>
                    <a
                      id="review-tab"
                      class="nav-item nav-link"
                      data-bs-toggle="tab"
                      href="#review"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >{{ $t('details.reviews') }} (4)</a>
                  </div>
                </nav>
              </div>
              <div id="pro-detailsContent" class="tab-content">
                <div id="des" class="tab-pane fade show active" role="tabpanel">
                  <div class="product__details-des">
                    <p>{{ $t(`${item.sm_desc}`) }}</p>

                    <!-- <div class="product__details-des-list mb-20">
                      <ul>
                        <li v-for="(list,i) in item.details.details_list" :key="i">
                          <span>{{ list }}</span>
                        </li>
                      </ul>
                    </div> -->
                    <!-- <p>{{ item.details.details_text_2 }}</p> -->
                  </div>
                </div>
                <div id="add" class="tab-pane fade" role="tabpanel">
                  <div class="product__details-add">
                    <ul>
                      <li><span>{{ $t('details.weight') }}</span></li>
                      <li><span>.25 KG</span></li>
                      <li><span>{{ $t('details.dimention') }}</span></li>
                      <li><span>62 × 56 × 12 cm</span></li>
                      <li><span>{{ $t('details.size') }}</span></li>
                      <li><span>XL, XXL, LG, SM, MD</span></li>
                    </ul>
                  </div>
                </div>
                <div id="review" class="tab-pane fade" role="tabpanel">
                  <product-details-review :item="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- related products start -->
  <related-products :item="item" />
  <!-- related products end -->
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductDetailsContent from './ProductDetailsContent.vue'
import ProductDetailsReview from './ProductDetailsReview.vue'
import RelatedProducts from './RelatedProducts.vue'
import ProductType from '~~/types/productType'

export default defineComponent({
  components: { ProductDetailsContent, ProductDetailsReview, RelatedProducts },
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    },
  },
  setup () {
    return {}
  },
  data () {
    return {
      active_img: this.item.img,
    }
  },
  methods: {
    handleActiveImg (img:string) {
      this.active_img = img
    },
  },
})
</script>
