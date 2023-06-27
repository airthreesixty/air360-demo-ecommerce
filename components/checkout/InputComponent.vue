<template>
  <div>
    <label :for="id">{{ label }}<span class="required">*</span></label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number | null;
  id: string;
  label: string;
  type?: 'text' | 'number';
  placeholder?: string;
}

defineProps<Props>()

defineEmits<{(e: 'update:modelValue', value: number): void, (e: 'focus'): void, (e: 'blur'): void}>()
</script>
