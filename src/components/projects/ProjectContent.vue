<script setup>
const props = defineProps({
  projectName: String,
})

const res = await fetch(`/markup/${props.projectName}.html`)
const text = await res.text()
</script>

<template>
  <div v-html="text"></div>
</template>
