<script setup lang="ts"></script>

<template>
  <header class="px-20 d-flex flex-row align-items-center">
    <a href="#" class="d-flex flex-row align-items-center mr-20">
      <img src="src/assets/logo.svg" />
      <span class="logo">Projet Boutique avec Vue.js 3</span>
    </a>
    <ul class="d-flex flex-row flex-fill">
      <li class="mr-10">
        <a href="#">Boutique</a>
      </li>
      <li>
        <a href="#">Admin</a>
      </li>
    </ul>
    <ul class="d-flex flex-row">
      <li class="mr-10">
        <a href="#">inscription</a>
      </li>
      <li>
        <a href="#">Boutique</a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
  header {
    background-color: var(--primary-2);
    a {
      color: var(--text-primary-color);
      img {
        width: 20px;
        margin-right: 5px;
      }
      .logo {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
</style>