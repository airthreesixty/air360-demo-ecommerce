<template>
  <section class="coupon-area pt-100 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="coupon-accordion">
            <!-- ACCORDION START -->
            <h3>
              {{ $t('checkout.returning') }}
              <span id="showlogin" @click="handleCheckoutLogin">{{ $t('checkout.click-here-to-login') }}</span>
            </h3>
            <div v-if="checkoutLogin" id="checkout-login" class="coupon-content">
              <div class="coupon-info">
                <p class="coupon-text">
                  {{ $t('checkout.login.description') }}
                </p>
                <form @submit.prevent="handleSubmit">
                  <p class="form-row-first">
                    <label>{{ $t('checkout.login.user-info') }} <span class="required">*</span></label>
                    <input v-model="formValue.name_or_email" type="text">
                  </p>
                  <p class="form-row-last">
                    <label>{{ $t('checkout.login.password') }} <span class="required">*</span></label>
                    <input v-model="formValue.password" type="text">
                  </p>
                  <p class="form-row">
                    <button class="os-btn os-btn-black" type="submit">
                      {{ $t('checkout.login.button') }}
                    </button>
                    <label>
                      <input v-model="formValue.isChecked" type="checkbox">
                      {{ $t('checkout.login.remember-me') }}
                    </label>
                  </p>
                  <p class="lost-password">
                    <nuxt-link :to="localePath('/login')">
                      {{ $t('checkout.login.user-info') }}
                    </nuxt-link>
                  </p>
                </form>
              </div>
            </div>
            <!-- ACCORDION END -->
          </div>
        </div>
        <div class="col-md-6">
          <div class="coupon-accordion">
            <!-- ACCORDION START -->
            <h3>
              {{ $t('checkout.have-a-coupon') }}
              <span id="showcoupon" @click="handleCheckoutCoupon">{{ $t('checkout.click-here-to-enter') }}</span>
            </h3>
            <div v-if="checkoutCoupon" id="checkout_coupon" class="coupon-checkout-content">
              <div class="coupon-info">
                <form @submit.prevent="handleCouponSubmit">
                  <p class="checkout-coupon">
                    <input v-model="couponVal" type="text" :placeholder="$t('checkout.coupon-code')">
                    <button class="os-btn os-btn-black" type="submit">
                      {{ $t('checkout.coupon') }}
                    </button>
                  </p>
                </form>
              </div>
            </div>
            <!-- ACCORDION END -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface formValueType {
  name_or_email:string,
  password:string,
  isChecked:boolean
}

export default defineComponent({
  setup () {
    const localePath = useLocalePath()
    return {
      localePath,
    }
  },
  data () {
    return {
      checkoutLogin: false,
      checkoutCoupon: false,
      formValue: {
        name_or_email: '',
        password: '',
        isChecked: false,
      } as formValueType,
      couponVal: '',
    }
  },
  methods: {
    handleCheckoutLogin () {
      this.checkoutLogin = !this.checkoutLogin
    },
    handleCheckoutCoupon () {
      this.checkoutCoupon = !this.checkoutCoupon
    },
    handleSubmit () {
      this.formValue = {} as formValueType
    },
    handleCouponSubmit () {
      console.log(this.couponVal)
      this.couponVal = ''
    },
  },
})
</script>
