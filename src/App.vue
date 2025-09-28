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
            <div class="mt-4 mb-md-4 d-flex justify-content-center align-items-center">
              <div
                class="spinner-border text-light"
                style="
                  --bs-spinner-width: 10rem;
                  --bs-spinner-height: 10rem;
                  --bs-spinner-border-width: 1.25em;
                "
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
