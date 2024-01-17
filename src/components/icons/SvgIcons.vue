<template>
  <component :is="svgIcons[props.iconName]" />
</template>

<script setup lang="ts">
  import { type Component } from 'vue'
  import Newcat from './Newcat.vue'
  import Cleaned from './Cleaned.vue'
  import Newlocation from './Newlocation.vue'
  import Notfound from './Notfound.vue'

  const props = defineProps<{ iconName: string }>()

  interface Icon {
    [key: string]: Component
  }

  const svgIcons: Icon = {
    'newcat': Newcat,
    'cleaned': Cleaned,
    'newlocation': Newlocation,
    'notfound': Notfound
  }
</script>