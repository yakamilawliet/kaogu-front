<script setup>
import { RouterView } from 'vue-router'
import {nextTick, ref, provide} from "vue";

const isRouterAlive = ref(true)
const reload = () => {
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
  })
}
provide('reload', reload)

</script>

<template>
     <RouterView />
</template>

<style scoped>

</style>
