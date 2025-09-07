<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  options: Array,
})
</script>

<template>
  <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
    <div class="container">
      <RouterLink to="/" class="navbar-brand noselect">Nicholas Lang</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="option in options" :key="option.title" class="nav-item">
            <RouterLink :to="`${option.path}`" class="nav-link">{{ option.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
