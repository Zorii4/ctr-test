<template>
  <component :is="svgIcons[props.iconName]" />
</template>

<script setup lang="ts">
  import Newcat from './Newcat.vue'
  import Cleaned from './Cleaned.vue'
  import Newlocation from './Newlocation.vue'
  import Notfound from './Notfound.vue'

  const props = defineProps(['iconName'])

  const svgIcons = {
    'newcat': Newcat,
    'cleaned': Cleaned,
    'newlocation': Newlocation,
    'notfound': Notfound
  }
</script>