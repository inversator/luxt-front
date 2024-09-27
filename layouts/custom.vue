<script setup lang="ts"></script>

<template>
  <header>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink>
    <NuxtLink to="/register">Register</NuxtLink>
  </header>
  <main>
    <slot />
  </main>
</template>

<style scoped></style>
