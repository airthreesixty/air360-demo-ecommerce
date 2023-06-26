<template>
  <layout :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.shop.title')" :subtitle="$t('bread-crumb.shop.subtitle')" />
    <shop-area />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import ShopArea from '~~/components/shop/ShopArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopArea,
  },
  setup () {
    const { t } = useI18n()
    useHead({
      title: t('page-title.shop'),
    })
  },
})
</script>
