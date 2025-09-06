<script setup>
defineProps({
  sources: Array,
  theme: String,
  ratio: Number,
})
</script>

<template>
  <div
    id="carouselIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
    :data-bs-theme="theme"
  >
    <div class="carousel-indicators">
      <button
        v-for="source in sources"
        :key="source.index"
        type="button"
        data-bs-target="carouselIndicators"
        :data-bs-slide-to="source.index"
        :class="`${source.index === 0 ? 'active' : ''}`"
        :aria-current="source.index === 0"
        :aria-label="`Slide ${source.index + 1}`"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="source in sources"
        :key="source.index"
        :class="`carousel-item ratio ${source.index === 0 ? 'active' : ''}`"
      >
        <img
          v-if="source.type === 'img'"
          class="d-block w-100 rounded-2 border"
          :src="source.src"
          :alt="source.title"
        />
        <iframe
          v-else
          class="d-block w-100 rounded-2 border"
          :style="`--bs-aspect-ratio: ${ratio}`"
          :src="source.src"
          :title="source.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
