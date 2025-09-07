<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const loadingIndicator = `
  <div class="mt-4 mb-md-4 d-flex justify-content-center align-items-center">
    <div
      class="spinner-border text-light"
      style="--bs-spinner-width: 10rem; --bs-spinner-height: 10rem; --bs-spinner-border-width: 1.25em"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
`
const content = ref(loadingIndicator)
const route = useRoute()

onBeforeMount(async () => {
  // Get page
  const res = await fetch(`../src/components/projects/markup/${route.params.name}.html`)
  const text = await res.text()
  content.value = text
})
</script>

<template>
  <main class="bd-content" role="main" v-html="content"></main>
</template>

<style scoped>
:root {
  --bs-spinner-width: 4rem !important;
  --bs-spinner-height: 4rem !important;
  --bs-spinner-border-width: 0.5em !important;
}
</style>
