<script setup>
import SectionComponent from './SectionComponent.vue'
import IconItem from './IconItem.vue'
</script>

<template>
  <SectionComponent
    :title="'Skills'"
    :subtitle="`Shown below are some of the languages, frameworks, and tools I've had experience working with in the past:`"
    :id="`skills`"
  >
    <IconItem :icon="`devicon-react-original-wordmark`" :href="`https://react.dev/`"></IconItem>
    <IconItem :icon="`devicon-angularjs-plain`" :href="`https://angular.dev/`"></IconItem>
    <IconItem :icon="`devicon-vuejs-plain`" :href="`https://vuejs.org/`"></IconItem>
    <IconItem :icon="`devicon-nodejs-plain-wordmark`" :href="`https://nodejs.org/`"></IconItem>
    <IconItem
      :icon="`devicon-express-original-wordmark`"
      :href="`https://expressjs.com/`"
    ></IconItem>
    <IconItem :icon="`devicon-mongodb-plain`" :href="`https://www.mongodb.com/`"></IconItem>
    <IconItem :icon="`devicon-bootstrap-plain`" :href="`https://getbootstrap.com/`"></IconItem>
    <IconItem :icon="`devicon-tailwindcss-original`" :href="`https://tailwindcss.com/`"></IconItem>
    <IconItem :icon="`devicon-cplusplus-plain`" :href="`https://isocpp.org/`"></IconItem>
    <IconItem
      :icon="`devicon-csharp-plain`"
      :href="`https://dotnet.microsoft.com/en-us/languages/csharp`"
    ></IconItem>
    <IconItem :icon="`devicon-java-plain-wordmark`" :href="`https://www.java.com/en/`"></IconItem>
    <IconItem :icon="`devicon-unity-plain`" :href="`https://unity.com/`"></IconItem>
  </SectionComponent>
</template>
