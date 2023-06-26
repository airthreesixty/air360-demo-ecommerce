<template>
  <client-only>
    <section class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div v-if="state.wishlists.length === 0" class="text-center">
              <h3>{{ $t('wishlist.no-wish') }}</h3>
              <nuxt-link class="os-btn os-btn-black mt-20" :to="localePath('/shop')">
                {{ $t('wishlist.shop-now') }}
              </nuxt-link>
            </div>
            <form v-if="state.wishlists.length > 0" action="#">
              <div class="table-content table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">
                        {{ $t('wishlist.images') }}
                      </th>
                      <th class="cart-product-name">
                        {{ $t('wishlist.product') }}
                      </th>
                      <th class="product-price">
                        {{ $t('wishlist.unit-price') }}
                      </th>
                      <th class="product-quantity">
                        {{ $t('wishlist.quantity') }}
                      </th>
                      <th class="product-subtotal">
                        {{ $t('wishlist.total') }}
                      </th>
                      <th class="product-remove">
                        {{ $t('wishlist.remove') }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <wishlist-item v-for="(item,i) in state.wishlists" :key="i" :item="item" />
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WishlistItem from './WishlistItem.vue'
import { useWishlistStore } from '~~/store/useWishlist'

export default defineComponent({
  components: { WishlistItem },
  setup () {
    const state = useWishlistStore()
    const localePath = useLocalePath()
    return { state, localePath }
  },
  created () {
    this.state.get_wishlist_products
  },
})
</script>
