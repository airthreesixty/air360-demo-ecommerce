<template>
  <layout :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.cart.title')" :subtitle="$t('bread-crumb.cart.subtitle')" />
    <cart-area />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import CartArea from '~~/components/cart-wishlists/CartArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    CartArea,
  },
  setup () {
    const { t } = useI18n()
    useHead({
      title: t('page-title.cart'),
    })
  },
})
</script>
