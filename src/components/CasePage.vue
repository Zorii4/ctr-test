<template>
  <div>
    <div class="btn-container">
      <button class="btn" @click="emit('goBack')">Назад</button>
      <button class="btn" @click="emit('makeRead', props.pageData[0].id)">
        {{ props.pageData[0].read ? "Отметить непрочитанным" : "Прочитать" }}
      </button>
    </div>
    <div v-for="data of props.pageData" :key="data.id" class="case-container">
      <div class="title-wrapper">
        <SvgIcons :icon-name="data.code"/>
        <h1 class="title">{{ data.description }}</h1>
        <div v-if="!data.read" class="new-tag">Новое</div>
      </div>
      <ul>
        <li class="list-item">
          <div class="item-title">ID</div>
          <div class="item-descr">{{ data.cat }}</div>
        </li>
        <li class="list-item">
          <div class="item-title">Категория</div>
          <div class="item-descr">{{ data.id }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SvgIcons from './icons/SvgIcons.vue';

  const props = defineProps(['pageData'])
  const emit = defineEmits(['goBack', 'makeRead'])
</script>

<style scoped>
  .case-container {
    padding: 32px 40px;
    border-radius: 15px;
    border: 1px solid #E4EBF4;
  }

  .title-wrapper {
    display: flex;
    gap: 0 18px;
    align-items: center;
    margin-bottom: 32px;
  }

  .title {
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 32px;
  }

  .new-tag {
    text-align: center;
    padding: 2px 6px;
    border-radius: 27px;
    background: #8694A7;
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 0 18px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .list-item:not(:last-child) {
    border-bottom: 1px solid #E4EBF4;
  }

  .item-title {
    width: 100px;
    color: #8694A7;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
  }

  .item-descr {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  .btn {
    padding: 8px 24px;
    gap: 10px;
    border-radius: 15px;
    border: 1px solid #E4EBF4;
    color: #8694A7;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    background: #fff
  }
</style>