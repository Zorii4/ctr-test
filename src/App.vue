<template>
  <div>
    <Transition name="fade">
      <MainPage 
        v-if="!changePage" 
        :cases="cases"
        :normalize-data="normalizeData"
        @getReading="getReading"
        @togglePage="togglePage"
      />
    </Transition>
    <Transition name="fade">
      <CasePage 
        v-if="changePage" 
        :page-data="currentPageData" 
        @goBack="togglePage" 
        @makeRead="getReading"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import { getNotificationsList, getCasesList } from "../src/apiServices/notifications"
  import { INotifications, ICases, INormalizeData } from "./interfaces/notificationsList"
  import CasePage from "./components/CasePage.vue"
  import MainPage from "./components/MainPage.vue"

  const notifications = ref<INotifications[]>()
  const cases = ref<ICases[]>()
  const normalizeData = ref<INormalizeData[]>([])
  const changePage = ref(false)
  const currentPageData = ref()

  onMounted(async() => {
    notifications.value = await getNotificationsList()
    cases.value = await getCasesList()
    normalazingData()
  })

  const normalazingData = () => {
    notifications.value?.forEach((el) => {
      cases.value?.forEach((item) => {
        if(el.case === item.id) {
          normalizeData.value.push({
            id: el.id,
            cat: el.cat,
            case: el.case,
            name: item.name,
            description: item.description,
            code: item.code,
            read: false
          })
        }
      })
    })
  }

  const getReading = (id: number) => {
    normalizeData.value.forEach((el) => {
      if(el.id === id) { el.read = !el.read }
    })
  }

  const togglePage = (id?: number) => {
    changePage.value = !changePage.value
    currentPageData.value = normalizeData.value.filter(el => el.id === id)
  }

</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
