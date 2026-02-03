<script setup>
defineProps({
  icon: String,
  href: String,
  label: String,
})
</script>

<template>
  <div class="col-4 col-md-3 col-xl-2 pt-3 d-flex justify-content-center">
    <figure class="figure text-center">
      <a class="tool" :href="href" target="_blank" :aria-label="label">
        <i :class="`${icon} tool-icon`"></i>
      </a>
    </figure>
  </div>
</template>
