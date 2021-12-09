<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="experience-container">
    <div class="experience">
      <div class="card-items">
        <div class="img-container">
          <img
            class="img"
            src="../../public/freelancer.svg"
            alt="experience image card"
          />
        </div>
        <div class="txt-container">
          <p class="txt">
            <span class="title">{{ t('experience.job-experience') }}</span>
            <br /><span class="question">{{
              t('experience.freelancing.type')
            }}</span
            >:
            <span class="answer">{{ t('experience.freelancing.a-type') }}</span>
            <br /><span class="question">{{
              t('experience.freelancing.location')
            }}</span
            >:
            <span class="answer">{{
              t('experience.freelancing.a-location')
            }}</span>
            <br /><span class="answer">{{
              t('experience.freelancing.a-date')
            }}</span>
          </p>
        </div>
      </div>
      <div class="card-items">
        <div class="img-container">
          <img
            class="img"
            src="../../public/startup-team.svg"
            alt="experience image card"
          />
        </div>
        <div class="txt-container">
          <p class="txt">
            <span class="title">{{ t('experience.job-experience') }}</span>
            <br /><span class="question">{{
              t('experience.startup.type')
            }}</span
            >: <span class="answer">{{ t('experience.startup.a-type') }}</span>
            <br /><span class="question">{{
              t('experience.startup.subject')
            }}</span
            >:
            <span class="answer">{{ t('experience.startup.a-subject') }}</span>
            <br /><span class="question">{{
              t('experience.startup.location')
            }}</span
            >:
            <span class="answer">{{ t('experience.startup.a-location') }}</span>
            <br /><span class="question">{{
              t('experience.startup.my_role')
            }}</span
            >:
            <span class="answer">{{ t('experience.startup.a-my_role') }}</span>
            <br /><span class="answer">{{
              t('experience.startup.a-date')
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience-container {
  padding: 4rem 25vw;
  .experience {
    .card-items {
      display: flex;
      align-items: center;
      border-radius: 20px;
      overflow: hidden;
      background-color: #fff;
      margin: 2.5vw 0;
      .img-container {
        width: 20vw;
        .img {
          width: 20vw;
        }
      }
      .txt-container {
        width: 37vw;
        display: flex;
        align-items: center;
        justify-content: start;
        .txt {
        }
      }
    }
  }
}

@media screen and (max-width: 940px) {
  .experience-container {
    padding: 4rem 16vw;
    .experience {
      .card-items {
        display: block;
        align-items: center;
        border-radius: 20px;
        overflow: hidden;
        background-color: #fff;
        margin: 2.5vw 0;
        .img-container {
          width: auto;
          .img {
            width: auto;
          }
        }
        .txt-container {
          width: 37vw;
          display: flex;
          align-items: center;
          justify-content: start;
          padding: 0 2vw;
          .txt {
          }
        }
      }
    }
  }
}
</style>
