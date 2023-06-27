<template>
  <section class="checkout-area pb-70">
    <div class="container">
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>{{ $t('checkout.details.title') }}</h3>
              <!-- billing details start -->
              <div class="row">
                <div class="col-md-12">
                  <country-select />
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.first-name') }} <span class="required">*</span></label>
                    <input v-model="info.firstName" type="text" :placeholder="$t('checkout.details.first-name')" required>
                    <!-- <checkout-input-component id="first-name" type="text" :placeholder="$t('checkout.details.first-name')" :label="$t('checkout.details.first-name')" /> -->
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.last-name') }}<span class="required">*</span></label>
                    <input v-model="info.lastName" type="text" :placeholder="$t('checkout.details.last-name')" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.company-name') }}</label>
                    <input v-model="info.companyName" type="text" :placeholder="$t('checkout.details.company-name')">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.address') }} <span class="required">*</span></label>
                    <input v-model="info.address" type="text" :placeholder="$t('checkout.details.street-address')" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <input
                      v-model="info.addressDetails"
                      type="text"
                      :placeholder="$t('checkout.details.street-address-details')"
                    >
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.town') }} <span class="required">*</span></label>
                    <input v-model="info.town" type="text" placeholder="Town / City" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.state') }} <span class="required">*</span></label>
                    <input v-model="info.state" type="text" :placeholder="$t('checkout.details.state')" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.zip') }} <span class="required">*</span></label>
                    <input v-model="info.zip" type="text" :placeholder="$t('checkout.details.zip')" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.email') }} <span class="required">*</span></label>
                    <input v-model="info.email" type="email" :placeholder="$t('checkout.details.email')" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.phone') }}<span class="required">*</span></label>
                    <input v-model="info.phone" type="text" :placeholder="$t('checkout.details.phone')" required>
                  </div>
                </div>
              </div>

              <!-- billing details end -->

              <!-- different address start -->
              <different-address />
              <!-- different address end -->
            </div>
          </div>
          <div class="col-lg-6">
            <!-- order area start -->
            <order-area />
            <!-- order area end -->
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref } from '@vue/composition-api'
import BillingDetails from './BillingDetails.vue'
import DifferentAddress from './DifferentAddress.vue'
import OrderArea from './OrderArea.vue'
import CountrySelect from './CountrySelect.vue'

const router = useRouter()
const localePath = useLocalePath()

const info = reactive({
  firstName: '',
  lastName: '',
  companyName: '',
  address: '',
  addressDetails: '',
  town: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
})

const handleFormSubmit = () => {
  console.log('submit form')
  console.log(info)
  router.push(localePath('/thank-you'))
}
</script>
