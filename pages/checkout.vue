<template>
  <layout-seven :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.checkout.title')" :subtitle="$t('bread-crumb.checkout.subtitle')" />
    <client-only>
      <div v-if="state.cart_products.length === 0" class="text-center pt-100 pb-100">
        <h3>{{ $t('checkout.empty') }}</h3>
        <nuxt-link class="os-btn os-btn-black mt-15" :to="localePath('/shop')">
          {{ $t('checkout.shop-now') }}
        </nuxt-link>
      </div>
      <div v-if="state.cart_products.length > 0">
        <coupon-area />
        <checkout-area />
      </div>
    </client-only>
  </layout-seven>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import LayoutSeven from '~/layout/LayoutSeven.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import CouponArea from '~~/components/checkout/CouponArea.vue'
import CheckoutArea from '~~/components/checkout/CheckoutArea.vue'
import { useCartStore } from '~~/store/useCart'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    CouponArea,
    CheckoutArea,
    LayoutSeven
  },
  setup () {
    const state = useCartStore()
    const { t } = useI18n()
    const localePath = useLocalePath()
    useHead({
      title: t('page-title.checkout'),
    })
    return { state, localePath }
  },
})
</script>
