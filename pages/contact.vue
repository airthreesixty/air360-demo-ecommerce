<template>
  <layout :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.contact.title')" :subtitle="$t('bread-crumb.contact.subtitle')" />
    <contact-area />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import ContactArea from '~~/components/contact/ContactArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ContactArea,
  },
  setup () {
    const { t } = useI18n()
    useHead({
      title: t('page-title.contact'),
    })
  },
})
</script>
