<template>
  <section :class="`header__search white-bg transition-3 ${showSearch?'search-opened':''}`">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="header__search-inner text-center">
                    <form action="#">
                        <div class="header__search-btn" @click="showSearch = false">
                            <a href="#" class="header__search-btn-close">
                              <i class="fal fa-times"></i>
                            </a>
                        </div>
                        <div class="header__search-header">
                            <h3>{{ $t('nav.search.title') }}</h3>
                        </div>
                        <div class="header__search-categories">
                            <ul class="search-category">
                                <li><nuxt-link href="/shop">{{ $t('nav.search.all') }}</nuxt-link></li>
                                <li><nuxt-link href="/shop">{{ $t('nav.search.accessories') }}</nuxt-link></li>
                                <li><nuxt-link href="/shop">{{ $t('nav.search.chair') }}</nuxt-link></li>
                                <li><nuxt-link href="/shop">{{ $t('nav.search.tablet') }}</nuxt-link></li>
                                <li><nuxt-link href="/shop">{{ $t('nav.search.men') }}</nuxt-link></li>
                                <li><nuxt-link href="/shop">{{ $t('nav.search.women') }}</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="header__search-input p-relative">
                            <input type="text" :placeholder="$t('nav.search.input-text')">
                            <button type="submit"><i class="far fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- body overlay start -->
  <div @click="showSearch = false" 
   :class="`body-overlay transition-3 ${showSearch?'opened':''}`">
  </div>
  <!-- body overlay end -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
//  emits:['searchPopup'],
 data() {
  return {
    showSearch:false,
  }
 },
 methods:{
  openSearchPopup(){
    console.log('first')
    this.showSearch = true
  }
 }
})
</script>
