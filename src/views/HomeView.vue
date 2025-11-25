<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import AboutSection from '@/components/home/AboutSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import WebProjects from '@/components/home/WebProjects.vue'
import GameProjects from '@/components/home/GameProjects.vue'
import MiscProjects from '@/components/home/MiscProjects.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()

const showSection = ref('hide')

onBeforeMount(() => {
  if (route.hash) location.hash = route.hash
})

onMounted(() => {
  console.log(window.scrollY)
  if (!location.hash && !window.scrollY) showSection.value = 'show'
})

function onBeforeEnter(el) {
  el.style.opacity = 1
}

function onEnter(el, done) {
  gsap.from(el, {
    y: 30,
    opacity: 0,
    onComplete: done,
  })
}

const sections = [AboutSection, SkillsSection, WebProjects, GameProjects, MiscProjects]
</script>

<template>
  <main>
    <!--TO-DO: Figure out staggered transitions on initial load, and no other time-->
    <TransitionGroup :css="false" @before-enter="onBeforeEnter" @enter="onEnter" appear>
      <component
        v-for="(section, index) in sections"
        :key="`${showSection}${index}`"
        :data-index="index"
        :is="section"
      ></component>
    </TransitionGroup>
  </main>
  <FooterComponent />
</template>
