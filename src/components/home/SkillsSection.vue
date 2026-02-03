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
    <IconItem
      :icon="`devicon-react-original-wordmark`"
      :href="`https://react.dev/`"
      :label="`Read more about React.js`"
    ></IconItem>
    <IconItem
      :icon="`devicon-angularjs-plain`"
      :href="`https://angular.dev/`"
      :label="`Read more about Angular`"
    ></IconItem>
    <IconItem
      :icon="`devicon-vuejs-plain`"
      :href="`https://vuejs.org/`"
      :label="`Read more about Vue.js`"
    ></IconItem>
    <IconItem
      :icon="`devicon-nodejs-plain-wordmark`"
      :href="`https://nodejs.org/`"
      :label="`Read more about Node.js`"
    ></IconItem>
    <IconItem
      :icon="`devicon-express-original-wordmark`"
      :href="`https://expressjs.com/`"
      :label="`Read more about express.js`"
    ></IconItem>
    <IconItem
      :icon="`devicon-mongodb-plain`"
      :href="`https://www.mongodb.com/`"
      :label="`Read more about MongoDB`"
    ></IconItem>
    <IconItem
      :icon="`devicon-bootstrap-plain`"
      :href="`https://getbootstrap.com/`"
      :label="`Read more about Bootstrap`"
    ></IconItem>
    <IconItem
      :icon="`devicon-tailwindcss-original`"
      :href="`https://tailwindcss.com/`"
      :label="`Read more about TailwindCSS`"
    ></IconItem>
    <IconItem
      :icon="`devicon-cplusplus-plain`"
      :href="`https://isocpp.org/`"
      :label="`Read more about C plus plus`"
    ></IconItem>
    <IconItem
      :icon="`devicon-csharp-plain`"
      :href="`https://dotnet.microsoft.com/en-us/languages/csharp`"
      :label="`Read more about C sharp`"
    ></IconItem>
    <IconItem
      :icon="`devicon-java-plain-wordmark`"
      :href="`https://www.java.com/en/`"
      :label="`Read more about Java`"
    ></IconItem>
    <IconItem
      :icon="`devicon-unity-plain`"
      :href="`https://unity.com/`"
      :label="`Read more about Unity`"
    ></IconItem>
  </SectionComponent>
</template>
