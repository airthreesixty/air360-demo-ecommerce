<template>
  <client-only>
    <header>
      <div id="header-sticky" :class="`header__area header__transparent header__transparent-2 pt-15 pb-15 box-25 ${isSticky ? 'sticky' : ''}`">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-3">
              <div class="logo">
                <nuxt-link :to="localePath('/')">
                  <img src="~/assets/img/logo/log-3.webp" alt="logo">
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-7 col-lg-6 col-md-1 col-sm-1">
              <div class="main-menu main-menu-3 d-none d-lg-block p-relative">
                <nav>
                  <menus />
                </nav>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-7 col-sm-8">
              <div class="header__right p-relative d-flex justify-content-between justify-content-sm-end align-items-center">
                <div class="mobile-menu-btn d-lg-none" @click.prevent="handleOffcanvas">
                  <a href="#" class="mobile-menu-toggle"><i class="fas fa-bars" /></a>
                </div>
                <div class="header__action">
                  <ul>
                    <li>
                      <a href="#" class="search-toggle" @click.prevent="onClick">
                        <i class="fas fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href="#" class="test"><i class="fas fa-user" />
                      </a>
                      <!-- extra info start -->
                      <extra-info />
                      <!-- extra info end -->
                    </li>
                    <li>
                      <a href="#" class="cart">
                        <i class="fas fa-cart-plus" />
                        <span class="cart-number-2">{{ state.totalPriceQuantity.quantity }}</span>
                      </a>
                      <!-- cart mini start -->
                      <cart-mini />
                      <!-- cart mini end -->
                    </li>
                  </ul>
                </div>
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
import { useCartStore } from '~~/store/useCart'
import SearchPopup from '~~/components/common/modals/SearchPopup.vue'
import OffCanvas from '~~/components/common/sidebar/OffCanvas.vue'
// interface
interface SearchPopupComponentRef {
  openSearchPopup(): void
}
interface OffCanvasComponentRef {
  OpenOffcanvas(): void
}

export default defineComponent({
  components: { Menus, CartMini, ExtraInfo, SearchPopup, OffCanvas },
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
    onClick() {
      console.log("Clicked")
    }
  },
})
</script>
