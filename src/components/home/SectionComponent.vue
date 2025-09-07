<script setup>
defineProps({
  title: String,
  subtitle: String,
  id: String,
})
</script>

<template>
  <section>
    <div class="heading">
      <div class="container text-light">
        <div class="row align-items-center">
          <div class="col pt-3 px-md-5">
            <h1 :id="id" class="text-center">{{ title }}</h1>
            <p class="text-center">{{ subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container text-light" data-bs-theme="dark">
        <div class="row">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>
