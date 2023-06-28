<template>
  <div class="sidebar__widget">
    <div class="sidebar__widget-title mb-30">
      <h3>{{ $t('featured-products.title') }}</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="features__product">
        <ul>
          <li v-for="(item,i) in featured_prd" :key="i" class="mb-20">
            <div class="featires__product-wrapper d-flex">
              <div class="features__product-thumb mr-15">
                <nuxt-link :to="localePath(`/product-details/${item.id}`)">
                  <img :src="item.img" alt="pro-sm-1" style="width: 86px;height: 110px;">
                </nuxt-link>
              </div>
              <div class="features__product-content">
                <h5>
                  <nuxt-link :to="localePath(`/product-details/${item.id}`)">
                    <!-- <span v-html="item.title" /> -->
                    <span>{{ $t(`${item.title}.title`) }}</span>
                  </nuxt-link>
                </h5>
                <div class="price">
                  <span>{{ $t('currency-mark') }}{{ locale === 'ja' ? (item.price * 100).toLocaleString() : item.price }}</span>
                  <span v-if="item.old_price" class="old-price">
                    <del>{{ $t('currency-mark') }}{{ locale === 'ja' ? (item.old_price * 100).toLocaleString() : item.old_price }}</del>
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '~~/store/useProducts'

export default defineComponent({
  setup () {
    const store = useProductsStore()
    const featured_prd = store.products.filter(p => p.trending).slice(0, 2)
    const localePath = useLocalePath()
    const { locale } = useI18n()
    return { featured_prd, localePath, locale }
  },
})
</script>
