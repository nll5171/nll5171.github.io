<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  year: String,
  subtitle: String,
  img: String,
  url: String,
})
</script>

<template>
  <div class="col-xs-12 col-md-6 col-lg-4 py-3 px-md-4" data-bs-theme="light">
    <RouterLink :to="`/projects/${url}`" class="card-href">
      <div class="card">
        <img :src="`/img/${img}`" class="card-img-top" :alt="`${title} image`" />
        <div class="card-header">
          <h5 class="card-title">{{ title }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            <strong>{{ year }}</strong>
            <span v-if="subtitle"> - {{ subtitle }}</span>
          </h6>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
