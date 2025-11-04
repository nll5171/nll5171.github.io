<script setup>
defineProps({
  width: Number,
  height: Number,
  borderWidth: Number,
})
</script>

<template>
  <div class="mt-4 mb-md-4 d-flex justify-content-center align-items-center">
    <div
      class="spinner-border text-light"
      :style="{
        '--bs-spinner-width': width,
        '--bs-spinner-height': height,
        '--bs-spinner-border-width': borderWidth,
      }"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
