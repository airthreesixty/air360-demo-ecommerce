<template>
  <ul class="extra-info">
    <li>
      <div class="my-account">
        <div class="extra-title">
          <h5>{{ $t('menu.my-account') }}</h5>
        </div>
        <ul>
          <!-- <li>
            <nuxt-link :to="localePath('/account')">
              {{ $t('menu.my-account') }}
            </nuxt-link>
          </li> -->
          <li>
            <nuxt-link :to="localePath('/wishlist')">
              {{ $t('menu.wish-list') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/cart')">
              {{ $t('menu.cart') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/checkout')">
              {{ $t('menu.checkout') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/register')">
              {{ $t('menu.create-account') }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="lang">
        <div class="extra-title">
          <h5>{{ $t('menu.language.title') }}</h5>
        </div>
        <ul>
          <li v-for="locale in availableLocales" :key="locale.code">
            <NuxtLink :to="switchLocalePath(locale.code)">
              {{ locale.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </li>
    <!-- <li>
      <div class="currency">
        <div class="extra-title">
          <h5>{{ $t('menu.currency.title') }}</h5>
        </div>
        <ul>
          <li><a href="#">{{ $t('menu.currency.euro') }}</a></li>
          <li><a href="#">{{ $t('menu.currency.yen') }}</a></li>
        </ul>
      </div>
    </li> -->
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const { locale, locales } = useI18n()
    const switchLocalePath = useSwitchLocalePath()
    const localePath = useLocalePath()

    const availableLocales = computed(() => {
      return (locales.value).filter(i => i.code !== locale.value)
    })
    return { locale, availableLocales, switchLocalePath, localePath }
  },
})
</script>
