<template>
  <select 
    :value="modelValue"
    @input="emit('update:modelValue', $event.target?.value)"
    class="base-select"
  >
    <option disabled value="">Тип уведомления</option>
    <option
      v-for="option in props.options" 
      :key="option.id"
      :value="option.name"
    >
      {{ option.name }}
    </option>
  </select>
  <button v-if="modelValue" @click="emit('reset')" class="reset-btn">Сбросить</button>
</template>

<script setup lang="ts">
  const props = defineProps(['options', 'modelValue'])
  const emit = defineEmits(['update:modelValue', 'reset'])
</script>

<style scoped>
  .base-select {
    width: 250px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: 12px 20px;
    border-radius: 15px;
    border: 1px solid #E4EBF4;
    background: #FFF;
    color: #8694A7;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    position: relative;
  }

  .base-select {
    background-image: url(/bottom.svg);
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: right 5% bottom 50%;
  }

  .reset-btn {
    background: transparent;
    border: none;
    width: 56px;
    height: 16px;
    color: #8694A7;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
  }
</style>