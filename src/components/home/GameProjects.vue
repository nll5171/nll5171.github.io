<script setup>
import SectionComponent from './SectionComponent.vue'
import CardItem from './CardItem.vue'
</script>

<template>
  <SectionComponent
    :title="`Game Development Projects`"
    :subtitle="`Check each card for a brief description. Click on that card to read more about the project.`"
    :id="`game-projects`"
  >
    <CardItem
      :title="`Haunted Hunters`"
      :year="`Spring 2024`"
      :subtitle="`Casual Game Development`"
      :img="`haunted-hunters.png`"
      :url="`haunted-hunters`"
    >
      <p class="card-text">
        An endless runner group project about escaping a haunted mansion, collecting energy to dodge
        or destroy enemies and obstacles in your way.
      </p>
      <p class="card-text">
        I was mainly responsible for the initial concept and game loop, as well as player movement
        mechanics.
      </p>
    </CardItem>

    <CardItem
      :title="`Punishment of Sisyphus`"
      :year="`Fall 2023`"
      :subtitle="`Game Design & Development II`"
      :img="`punishment-of-sisyphus.png`"
      :url="`punishment-of-sisyphus`"
    >
      <p class="card-text">
        A group project rogue-like centered around launching a pinball-like boulder to defeat waves
        of enemies.
      </p>
      <p class="card-text">
        Much of what I did centered around player input and movement, as well as some of the boulder
        physics and travel projection.
      </p>
    </CardItem>

    <CardItem
      :title="`Vault i`"
      :year="`Spring 2023`"
      :subtitle="`Intro to Game Web Tech`"
      :img="`vault-i.png`"
      :url="`vault-i`"
    >
      <p class="card-text">
        A group project to mod Fallout New Vegas and add a brief new quest. Players investigate
        reports of a cryptid in the Mojave and uncover a cult.
      </p>
      <p class="card-text">
        I handled the creation of the cultists as well as their new assets (modified models from the
        base game). I also did some quest scripting.
      </p>
    </CardItem>

    <CardItem
      :title="`Blink`"
      :year="`Spring 2022`"
      :subtitle="`Game Development & Algorithmic Problem Solving II`"
      :img="`blink.PNG`"
      :url="`blink`"
    >
      <p class="card-text">
        A puzzle game made in a group of 5 that sees the player transport crates while managing
        their remaining light energy to repel enemies.
      </p>
      <p class="card-text">
        I was mainly responsible for the rotation and collision of the player's light, as well as
        the crates.
      </p>
    </CardItem>

    <CardItem
      :title="`JoJo's Bizarre Adventure: HFTF Roman Cancel Hack`"
      :year="`Summer 2021`"
      :img="`roman-cancel.png`"
      :url="`hftf-rc`"
    >
      <p class="card-text">
        A romhack designed to replicate the Roman Cancel mechanic from the Guilty Gear series of
        fighting games.
      </p>
      <p class="card-text">
        Characters can spend one bar of meter to cancel their current action and return to a neutral
        state.
      </p>
    </CardItem>

    <CardItem
      :title="`JoJo's Bizarre Adventure: HFTF Rainbow Edition`"
      :year="`Winter 2020`"
      :img="`rainbow-edition.png`"
      :url="`hftf-rainbow`"
    >
      <p class="card-text">
        A romhack created for the "Heritage for Our Future" Charity event to raise money for St.
        Judes, in which characters are strengthened to absurdity.
      </p>
      <p class="card-text">
        Everyone starts with max resources and can cancel their special moves and supers into one
        another.
      </p>
    </CardItem>

    <CardItem
      :title="`JoJo's Bizarre Adventure: HFTF Alessi Mode Hack`"
      :year="`Summer 2019`"
      :img="`alessi-mode.png`"
      :url="`hftf-alessi`"
    >
      <p class="card-text">
        A romhack created to replicate the "Alessi Mode" present in the Dreamcast version of JoJo's
        Bizarre Adventure: Heritage for the Future.
      </p>
      <p class="card-text">
        Characters are transformed into a debuffed state and must defeat their opponent with one
        ground attack and one air attack.
      </p>
    </CardItem>
  </SectionComponent>
</template>
