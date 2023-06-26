<template>
  <layout :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.news.title')" :subtitle="$t('bread-crumb.news.subtitle')" />
    <blog-standard-area />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import BlogStandardArea from '~~/components/blogs/BlogStandardArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogStandardArea,
  },
  setup () {
    const { t } = useI18n()
    useHead({
      title: t('page-title.blog'),
    })
  },
})
</script>
