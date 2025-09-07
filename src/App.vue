<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <NavbarComponent
    :options="[
      { title: 'About Me', path: '/#about-me' },
      { title: 'Web Development Projects', path: '/#web-projects' },
      { title: 'Game Development Projects', path: '/#game-projects' },
      { title: 'Miscellaneous Projects', path: '/#misc-projects' },
      { title: 'Resume', path: 'src/assets/Nick_Lang_CV.pdf', type: 'external' },
      { title: 'Contact', path: '/#contact' },
    ]"
  />
  <RouterView />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
