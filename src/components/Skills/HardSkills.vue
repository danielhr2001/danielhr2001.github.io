<template>
  <div class="hard-skills-container">
    <div class="hard-skills">
      <div class="backend-skills-card-container">
        <img class="backend-skills-card" src="../../../public/backend_skills-card.svg"/>
      </div>
      <div class="frontend-skills-card-container">
        <img class="frontend-skills-card" src="../../../public/frontend_skills-card.svg"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hard-skills-container {
  background-image: url('../../../public/background.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 50vw;
  .hard-skills {
    // background-color: aqua;
    display: flex;
    justify-content: space-around;
    padding: 0 16vw;

    .backend-skills-card-container {
      .backend-skills-card {
      }
    }
    .frontend-skills-card-container {
      .frontend-skills-card {
      }
    }
  }
}
</style>
