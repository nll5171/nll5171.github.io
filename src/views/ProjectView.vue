<script setup>
import { useRoute } from 'vue-router'
import ProjectContent from '@/components/projects/ProjectContent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'

const route = useRoute()
</script>

<template>
  <Transition name="fade" mode="out-in">
    <Suspense>
      <ProjectContent :project-name="route.params.name"></ProjectContent>

      <template #fallback>
        <LoadingComponent :width="10" :height="10" :border-width="1.25"></LoadingComponent>
      </template>
    </Suspense>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
