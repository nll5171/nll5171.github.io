<script setup>
import SectionComponent from './SectionComponent.vue'
import CardItem from './CardItem.vue'
</script>

<template>
  <SectionComponent
    :title="`Miscellaneous Projects`"
    :subtitle="`Check each card for a brief description. Click on that card to read more about the project.`"
    :id="`misc-projects`"
  >
    <CardItem
      :title="`Throw Reject Miss in Under Night In-Birth`"
      :year="`Winter 2026`"
      :img="`uni-trm-thumbnail.png`"
      :url="`uni-trm`"
    >
      <p class="card-text">
        A video discussing changes to the throw reject miss mehcanic from the Under Night In-Birth.
        Unlike before, this one focused on code analysis.
      </p>
    </CardItem>
    <CardItem
      :title="`Green Shields in Under Night In-Birth 2`"
      :year="`Fall 2025`"
      :img="`uni-greenshield-thumbnail.png`"
      :url="`uni-greenshield`"
    >
      <p class="card-text">
        A video discussing the fairly minor adjustments to the green shield mechanic from Under
        Night In-Birth Exe:Late[cl-r] to Under Night In-Birth 2 Sys:Celes.
      </p>
    </CardItem>
    <CardItem
      :title="`Evolution of Meter-Build in Under Night In-Birth`"
      :year="`Spring 2025`"
      :img="`uni-meterbuild-thumbnail.png`"
      :url="`uni-meterbuild`"
    >
      <p class="card-text">
        A video discussing the adjustments to meter gain throughout every revision of fighting game
        Under Night In-Birth, from 2012 to May 2025.
      </p>
    </CardItem>

    <CardItem
      :title="`The Evolution of Hyde 66C in Under Night In-Birth`"
      :year="`Summer 2024`"
      :img="`hyde-66c-thumbnail.jpg`"
      :url="`hyde-66c-history`"
    >
      <p class="card-text">
        A video detailing the changes made to Hyde's 66C attack throughout every revision of
        fighting game Under Night In-Birth, from 2012 to July 2024.
      </p>
    </CardItem>

    <CardItem
      :title="`JoJo's and Damage Calculation`"
      :year="`Winter 2022`"
      :img="`damage-calculation-hftf-thumbnail.jpg`"
      :url="`hftf-damage-calculation`"
    >
      <p class="card-text">
        A code analysis video regarding the systems involved in damage calculation inside Capcom's
        1999 fighting game JoJo's Bizarre Adventure: Heritage for the Future.
      </p>
    </CardItem>

    <CardItem
      :title="`Launching and Teching in JoJo's`"
      :year="`Winter 2021`"
      :img="`launching-hftf-thumbnail.jpg`"
      :url="`hftf-launching-teching`"
    >
      <p class="card-text">
        A code analysis video regarding the systems involved in damage calculation inside Capcom's
        1999 fighting game JoJo's Bizarre Adventure: Heritage for the Future.
      </p>
    </CardItem>

    <CardItem
      :title="`JoJo's and Infinite Prevention`"
      :year="`Fall 2021`"
      :img="`hftf-ips-thumbnail.jpg`"
      :url="`hftf-ips`"
    >
      <p class="card-text">
        An in-depth code analysis video discussing the Infinite Prevention System (IPS) used by
        JoJo's Bizarre Adventure: Heritage for the Future, to prevent infinite combos.
      </p>
    </CardItem>

    <CardItem
      :title="`CPS-3 ROM Conversion Tool`"
      :year="`Spring 2020`"
      :img="`combined-split-2.png`"
      :url="`rom-conversion`"
    >
      <p class="card-text">
        A tool programmed in Java to convert CPS-3 ROMs between the two formats used by emulation
        software: the combined ROM format, and the split ROM format.
      </p>
    </CardItem>
  </SectionComponent>
</template>
