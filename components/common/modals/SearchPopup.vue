<template>
  <section :class="`header__search white-bg transition-3 ${showSearch?'search-opened':''}`">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="header__search-inner text-center">
            <form action="#" @submit.prevent="filteredItems">
              <div class="header__search-btn" @click="showSearch = false">
                <a href="#" class="header__search-btn-close">
                  <i class="fal fa-times" />
                </a>
              </div>
              <div class="header__search-header">
                <h3>{{ $t('nav.search.title') }}</h3>
              </div>
              <div class="header__search-categories">
                <ul class="search-category">
                  <li>
                    <nuxt-link href="/shop">
                      {{ $t('nav.search.all') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/shop">
                      {{ $t('nav.search.accessories') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/shop">
                      {{ $t('nav.search.chair') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/shop">
                      {{ $t('nav.search.tablet') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/shop">
                      {{ $t('nav.search.men') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/shop">
                      {{ $t('nav.search.women') }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="header__search-input p-relative">
                <input v-model="searchText" type="text" :placeholder="$t('nav.search.input-text')">
                <button type="submit">
                  <i class="far fa-search" />
                </button>
                <p>{{ searchText }}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- body overlay start -->
  <div
    :class="`body-overlay transition-3 ${showSearch?'opened':''}`"
    @click="showSearch = false"
  />
  <!-- body overlay end -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import productData from '../../../data/productData'

export default defineComponent({
//  emits:['searchPopup'],
  setup () {
    const { t } = useI18n()
    const searchText = ref('')
    // store titles
    // filter titles by the search keyword

    const titles = productData.map(item => t(`${item.title}.title`))
    console.log(titles)

    const filteredItems = () => {
      return titles.filter(title => title.includes(searchText.value))
    }

    return {
      searchText,
      filteredItems,
    }
  },
  data () {
    return {
      showSearch: false,
    }
  },
  methods: {
    openSearchPopup () {
      console.log('first')
      this.showSearch = true
    },
  },
})
</script>
