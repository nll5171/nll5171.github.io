<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'
</script>

<template>
  <NavbarComponent
    :options="[
      { title: 'About Me', path: '/#about-me' },
      { title: 'Web Development Projects', path: '/#web-projects' },
      { title: 'Game Development Projects', path: '/#game-projects' },
      { title: 'Miscellaneous Projects', path: '/#misc-projects' },
      { title: 'Resume', path: 'Nick_Lang_CV.pdf', type: 'external' },
      { title: 'Contact', path: '/#contact' },
    ]"
  />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <LoadingComponent
              :width="'10rem'"
              :height="'10rem'"
              :border-width="'1.25rem'"
            ></LoadingComponent>
          </template>
        </Suspense>
      </div>
    </transition>
  </router-view>
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
