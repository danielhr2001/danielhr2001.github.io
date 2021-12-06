<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <FirstView />
  <PersonalInfo />
  <Skills />
  <Experience />
  <Education />
  <AboutMe />
</template>

<style lang="scss" scoped>
</style>
