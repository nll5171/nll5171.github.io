<script setup>
import SectionComponent from './SectionComponent.vue'
import CardItem from './CardItem.vue'
</script>

<template>
  <SectionComponent
    :title="`Web Development Projects`"
    :subtitle="`Check each card for a brief description. Click on that card to read more about the project.`"
    :id="`web-projects`"
  >
    <CardItem
      :title="`EarthCam Laravel Demo`"
      :year="`Winter 2026`"
      :img="`earth-cam-laravel-demo-home.png`"
      :url="`earth-cam-demo`"
    >
      <p class="card-text">
        A fullstack web application designed using React and Laravel to demonstrate my understanding
        of the latter for a Jr. Backend Developer postion.
      </p>
      <p class="card-text">
        The project has basic CRUD functionality and an authentication system. Styling was handled
        through TailwindCSS and daisyUI. Hosted temporarily via Heroku.
      </p>
    </CardItem>
    <CardItem
      :title="`Ignite-Boost.net`"
      :year="`Summer 2025`"
      :img="`ignite-boost-redesign-gallery.png`"
      :url="`ignite-boost`"
    >
      <p class="card-text">
        A fullstack MEAN application designed to serve as a video database for the fighting game
        Dengeki Bunko Fighting Climax, where players can watch and submit matches.
      </p>
      <p class="card-text">
        Migrated front-end from React and Bootstrap to Angular Material with TailwindCSS. Redesigned
        it as well to match the game's visual identity.
      </p>
    </CardItem>

    <CardItem
      :title="`Looking for Group`"
      :year="`Spring 2025`"
      :subtitle="`Golisano College of Computing & Information Sciences`"
      :img="`lfg-homepage.png`"
      :url="`looking-for-group`"
    >
      <p class="card-text">
        A fullstack web application designed to serve as a database for student-led projects at the
        Rochester Institute of Technology.
      </p>
      <p class="card-text">
        Primarily responsible for implementing the homepage, search functionality, filter and tag
        system, user settings, and additional touch-ups to page layouts.
      </p>
    </CardItem>

    <CardItem
      :title="`Internet Scavenger Hunt`"
      :year="`Fall 2024`"
      :subtitle="`Rich Media Web Application Development II`"
      :img="`scavenger-hunt-explore.png`"
      :url="`scavenger-hunt`"
    >
      <p class="card-text">
        A solo project developing a full-stack web application designed for users to create, host,
        and participate in scavenger hunts, specifically for exploring websites and videos.
      </p>
      <p class="card-text">
        The site used a MongoDB back-end and a React front-end, alongside Bootstrap.
      </p>
    </CardItem>

    <CardItem
      :title="`Portfolio`"
      :year="`Summer 2023`"
      :img="`portfolio-homepage.png`"
      :url="`portfolio`"
    >
      <p class="card-text">
        The very portfolio you're viewing now. A collection of all sorts of projects I've worked on,
        whether web dev related, game dev related, or something in-between.
      </p>
      <p class="card-text">
        Initially developed as a series of static Bootstrap pages, and later converted into a
        Single-Page Vue application.
      </p>
    </CardItem>

    <CardItem
      :title="`Picross`"
      :year="`Fall 2022`"
      :subtitle="`Intro to Game Web Tech`"
      :img="`picross.png`"
      :url="`picross`"
    >
      <p class="card-text">
        A solo project done in only a few days as the final for the class. Selects a random 16x16
        NES character to generate from several options, such as Mario, Kirby, and Mega Man.
      </p>
      <p class="card-text">
        Sound effects and music were added to improve the experience, and the grid is designed to
        scale in size based on screen dimensions.
      </p>
    </CardItem>
  </SectionComponent>
</template>
