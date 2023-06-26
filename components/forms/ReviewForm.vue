<template>
  <form id="contacts-form" class="conatct-post-form" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6">
        <div class="contact-icon p-relative contacts-name">
          <input type="text" :placeholder="$t('reviews.name')">
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6">
        <div class="contact-icon p-relative contacts-name">
          <input type="email" :placeholder="$t('reviews.email')">
        </div>
      </div>
      <div class="col-xl-12">
        <div class="contact-icon p-relative contacts-email">
          <input type="text" :placeholder="$t('reviews.subject')">
        </div>
      </div>
      <div class="col-xl-12">
        <div class="contact-icon p-relative contacts-message">
          <textarea
            id="comments"
            name="comments"
            cols="30"
            rows="10"
            :placeholder="$t('reviews.comments')"
          />
        </div>
      </div>
      <div class="col-xl-12">
        <button class="os-btn os-btn-black" type="submit">
          {{ $t('reviews.post-comment') }}
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  methods: {
    handleSubmit () {
      console.log('submitted')
    },
  },
})
</script>
