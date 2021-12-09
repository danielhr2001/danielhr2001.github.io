<template>
  <div class="hard-skills-container" id="position-hard-skills">
    <div class="hard-skills">
      <div class="backend-skills-card-container">
        <img
          class="backend-skills-card"
          src="../../../public/backend_skills-card.svg"
        />
      </div>
      <div class="frontend-skills-card-container">
        <img
          class="frontend-skills-card"
          src="../../../public/frontend_skills-card.svg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hard-skills-container {
  padding-top: 4rem;
  min-height: 900px;
  .hard-skills {
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
@media screen and (max-width: 940px) {
  .hard-skills-container {
    min-height: 900px;
    .hard-skills {
      display: block;
      // justify-content: space-around;
      padding: 0 16vw;

      .backend-skills-card-container {
        margin-bottom: 2vw;
        display: flex;
        justify-content: center;
        .backend-skills-card {
          // height: 50%;
        }
      }
      .frontend-skills-card-container {
        display: flex;
        justify-content: center;
        .frontend-skills-card {
        }
      }
    }
  }
}
</style>
