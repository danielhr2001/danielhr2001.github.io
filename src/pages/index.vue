<route lang="yaml">
meta:
  layout: home
</route>

<template>
  <div class="index">
    <FirstView />
    <PersonalInfo id="position-personal-info" />
    <Skills />
    <Education id="position-education" />
    <Experience id="position-experience" />
    <AboutMe id="position-about-me" />
  </div>
</template>

<style lang="scss" scoped>
.index {
  background-image: url('/background.svg');
  background-size: 100% auto;
}
</style>
