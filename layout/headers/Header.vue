<template>
  <client-only>
    <header>
      <div
        id="header-sticky"
        :class="`header__area ${transparent ? 'header__transparent' : ''} ${
          header_big ? 'box-25' : !white_bg ? 'grey-bg' : ''
        }
        ${isSticky ? 'sticky' : ''}`"
      >
        <div :class="`${header_big ? 'container-fluid' : 'container'}`">
          <div class="row align-items-center">
            <div
              :class="`${
                header_big
                  ? 'col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12'
                  : 'col-xl-3 col-lg-3 col-md-4 col-sm-4'
              }`"
            >
              <div class="logo">
                <nuxt-link :to="localePath('/')">
                  <img src="~/assets/img/logo/logo.png" alt="logo">
                </nuxt-link>
              </div>
            </div>
            <div
              :class="`${
                header_big
                  ? 'col-xl-7 col-lg-6 col-md-2 col-sm-1 col-2'
                  : 'col-xl-9 col-lg-9 col-md-8 col-sm-8'
              }`"
            >
              <div
                :class="`header__right p-relative ${
                  header_big
                    ? ''
                    : 'd-flex justify-content-between align-items-center'
                }`"
              >
                <div
                  :class="`main-menu ${
                    header_big ? 'main-menu-2 text-center' : ''
                  } d-none d-lg-block`"
                >
                  <nav>
                    <menus />
                  </nav>
                </div>
                <div
                  class="mobile-menu-btn d-lg-none"
                  @click.prevent="handleOffcanvas"
                >
                  <a
                    href="#"
                    class="mobile-menu-toggle"
                  ><i class="fas fa-bars" /></a>
                </div>
                <div v-if="!header_big" class="header__action">
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="search-toggle"
                        @click.prevent="handleOpenSearchBar"
                      >
                        <i class="ion-ios-search-strong" /> {{ $t('nav.search.title') }}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="cart"
                      ><i class="ion-bag" /> {{ $t('nav.cart.title') }}
                        <span>({{ state.totalPriceQuantity.quantity }})</span>
                      </a>
                      <!-- cart mini start -->
                      <cart-mini />
                      <!-- cart mini end -->
                    </li>
                    <li>
                      <a href="#"><i class="far fa-bars" /></a>
                      <extra-info />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              v-if="header_big"
              class="col-xl-3 col-lg-4 col-md-6 col-sm-7 col-10"
            >
              <div class="header__action header__action-2 f-right">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="search-toggle"
                      @click.prevent="handleOpenSearchBar"
                    >
                      <i class="ion-ios-search-strong" /> {{ $t('nav.search.title') }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="cart"
                    ><i class="ion-bag" /> Cart
                      <span>({{ state.totalPriceQuantity.quantity }})</span>
                    </a>
                    <!-- cart mini start -->
                    <cart-mini />
                    <!-- cart mini end -->
                  </li>
                  <li>
                    <a href="#"><i class="far fa-bars" /></a>
                    <extra-info />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- search popup start -->
    <search-popup ref="search_popup" />
    <!-- search popup end -->

    <!-- off canvas start -->
    <off-canvas ref="offcanvas" />
    <!-- off canvas end -->
  </client-only>
</template>

<script lang="ts">
// external
import { defineComponent } from 'vue'
// internal
import Menus from './Menus.vue'
import CartMini from './header-com/CartMini.vue'
import ExtraInfo from './header-com/ExtraInfo.vue'
import SearchPopup from '~~/components/common/modals/SearchPopup.vue'
import { useCartStore } from '~~/store/useCart'
import OffCanvas from '~~/components/common/sidebar/OffCanvas.vue'

// interface
interface SearchPopupComponentRef {
  openSearchPopup(): void;
}
interface OffCanvasComponentRef {
  OpenOffcanvas(): void;
}

export default defineComponent({
  components: { Menus, CartMini, ExtraInfo, SearchPopup, OffCanvas },
  props: {
    header_big: {
      type: Boolean,
      default: false,
    },
    white_bg: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  setup () {
    const state = useCartStore()
    const localePath = useLocalePath()
    return { state, localePath }
  },
  data () {
    return {
      isSticky: false,
      showSearch: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleSticky)
  },
  methods: {
    handleSticky () {
      if (window.scrollY > 80) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    },
    handleOpenSearchBar () {
      const searchPopupRef = this.$refs.search_popup as SearchPopupComponentRef
      searchPopupRef.openSearchPopup()
    },
    handleOffcanvas () {
      const offCanvas = this.$refs.offcanvas as OffCanvasComponentRef
      offCanvas.OpenOffcanvas()
    },
  },
})
</script>
