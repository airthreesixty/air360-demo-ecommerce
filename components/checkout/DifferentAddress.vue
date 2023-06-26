<template>
  <div class="different-address">
    <div class="ship-different-title">
      <h3>
        <label for="ship-box">{{ $t('checkout.details.subtitle') }}</label>
        <input id="ship-box" type="checkbox" @click="handleShipBox">
      </h3>
    </div>
    <div v-if="shipBox" id="ship-box-info">
      <div class="row">
        <div class="col-md-12">
          <country-select />
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.first-name') }} <span class="required">*</span></label>
            <input type="text" :placeholder="$t('checkout.details.first-name')">
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.last-name') }} <span class="required">*</span></label>
            <input type="text" :placeholder="$t('checkout.details.last-name')">
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.company-name') }}</label>
            <input type="text" :placeholder="$t('checkout.details.company-name')">
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.address') }} <span class="required">*</span></label>
            <input type="text" :placeholder="$t('checkout.details.street-address')">
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <input
              type="text"
              :placeholder="$t('checkout.details.street-address-details')"
            >
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.town') }} <span class="required">*</span></label>
            <input type="text" :placeholder="$t('checkout.details.town')">
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.state') }} <span class="required">*</span></label>
            <input type="text" placeholder="State / County">
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.zip') }} <span class="required">*</span></label>
            <input type="text" :placeholder="$t('checkout.details.zip')">
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.email') }} <span class="required">*</span></label>
            <input type="email" :placeholder="$t('checkout.details.email')">
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>{{ $t('checkout.details.phone') }} <span class="required">*</span></label>
            <input type="text" :placeholder="$t('checkout.details.phone')">
          </div>
        </div>
      </div>
    </div>
    <!-- <ClientOnly> -->
    <div class="order-notes">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.order-notes') }}</label>

        <textarea
          id="checkout-mess"
          cols="30"
          rows="10"
          :placeholder="$t('checkout.details.order-notes-desc')"
        />
      </div>
    </div>
    <!-- </ClientOnly> -->
  </div>
</template>

<script>
import CountrySelect from './CountrySelect.vue'

export default {
  components: { CountrySelect },
  data () {
    return {
      shipBox: false,
    }
  },
  methods: {
    handleShipBox () {
      this.shipBox = !this.shipBox
    },
  },
}
</script>
