<template>
  <div class="country-select">
    <label>{{ $t('checkout.details.country.title') }} <span class="required">*</span></label>
    <select>
      <option :value="$t('checkout.details.country.albania') ">
        {{ $t('checkout.details.country.albania') }}
      </option>
      <option :value="$t('checkout.details.country.america') ">
        {{ $t('checkout.details.country.america') }}
      </option>
      <option :value="$t('checkout.details.country.bahrain') ">
        {{ $t('checkout.details.country.bahrain') }}
      </option>
      <option :value="$t('checkout.details.country.colombia') ">
        {{ $t('checkout.details.country.colombia') }}
      </option>
      <option :value="$t('checkout.details.country.dominican') ">
        {{ $t('checkout.details.country.dominican') }}
      </option>
      <option :value="$t('checkout.details.country.france') ">
        {{ $t('checkout.details.country.france') }}
      </option>
      <option :value="$t('checkout.details.country.germany') ">
        {{ $t('checkout.details.country.germany') }}
      </option>
      <option :value="$t('checkout.details.country.japan') ">
        {{ $t('checkout.details.country.japan') }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
