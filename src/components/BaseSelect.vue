<template>
  <div>
    <div class="custom-select" tabindex="0" @blur="open = false">
      <div class="selected" :class="{'hasValue':selected !== 'Тип уведомления'}" @click="open = !open">
        {{ selected }}
        <span class="arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 7L8 11L4 7" stroke="#BAC5D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="items" v-if="open">
        <div
          class="item"
          v-for="option of props.options"
          :key="option.id"
          @click="selected=option.name; open=false; emit('input', option.name)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
    <button v-if="selected !== 'Тип уведомления'" @click="resetSelect" class="reset-btn">Сбросить</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { ICases } from "../interfaces/notificationsList"

  const props = defineProps<{ options: ICases[] }>()
  const emit = defineEmits(['reset', 'input'])

  const open = ref(false)
  const selected = ref('Тип уведомления')

  const resetSelect = () => {
    selected.value = 'Тип уведомления'
    emit('reset')
  }
</script>

<style scoped>
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
    margin-left: 16px;
  }

  .custom-select {
    cursor: pointer;
    position: relative;
    display: inline-block;
  }

  .selected {
    padding: 12px 20px;
    border-radius: 15px;
    border: 1px solid #E4EBF4;
    background: #FFF;
    color: #8694A7;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0 5px;
  }

  .items {
    position: absolute;
    width: 320px;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid #E4EBF4;
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(186, 197, 211, 0.15);
  }

  .item {
    padding-top: 10px;
    padding-bottom: 12px;
    color: #2B3F57;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .item:not(:last-child) {
    margin-bottom: 12px;
  }

  .hasValue {
    border: 1px solid #754EFF;
    color: #754EFF;
  }

  .arrow {
    display: flex;
    align-items: center;
  }

  .hasValue > span > svg > path {
    stroke: #754EFF;
  }
</style>