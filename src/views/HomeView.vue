<script setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import AboutSection from '@/components/home/AboutSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import WebProjects from '@/components/home/WebProjects.vue'
import GameProjects from '@/components/home/GameProjects.vue'
import MiscProjects from '@/components/home/MiscProjects.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()

onBeforeMount(() => {
  if (route.hash) location.hash = route.hash
})
</script>

<template>
  <main>
    <AboutSection />
    <SkillsSection />
    <WebProjects />
    <GameProjects />
    <MiscProjects />
  </main>
  <FooterComponent />
</template>
