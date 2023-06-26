<template>
  <div class="product__details-review">
    <div class="postbox__comments">
      <div class="postbox__comment-title mb-30">
        <h3>{{ $t('reviews.title') }} (32)</h3>
      </div>
      <div class="latest-comments mb-30">
        <ul>
          <li
            v-for="(review, index) in item.reviews"
            :key="index"
            :class="`${review.children ? 'children' : ''}`"
          >
            <div class="comments-box">
              <div class="comments-avatar">
                <img :src="review.img" alt="">
              </div>
              <div class="comments-text">
                <div class="avatar-name">
                  <h5>{{ review.name }}</h5>
                  <span> - {{ $t('reviews.date') }} </span>
                  <a class="reply" href="#">{{ $t('reviews.leave-reply') }}</a>
                </div>
                <div class="user-rating">
                  <ul>
                    <li><a href="#"><i class="fas fa-star" /></a></li>
                    <li><a href="#"><i class="fas fa-star" /></a></li>
                    <li><a href="#"><i class="fas fa-star" /></a></li>
                    <li><a href="#"><i class="fas fa-star" /></a></li>
                    <li><a href="#"><i class="fal fa-star" /></a></li>
                  </ul>
                </div>
                <p>{{ $t('reviews.review') }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="post-comments-form mb-100">
      <div class="post-comments-title mb-30">
        <h3>{{ $t('reviews.your-review') }}</h3>
        <div class="post-rating">
          <span>{{ $t('reviews.your-rating') }} :</span>
          <ul>
            <li>
              <a href="#">
                <i class="fal fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- review-form -->
      <review-form />
      <!-- review-form -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ReviewForm from '../forms/ReviewForm.vue'
import ProductType from '~~/types/productType'

export default defineComponent({
  components: { ReviewForm },
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
})
</script>
