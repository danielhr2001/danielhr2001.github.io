<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="education-container">
    <div class="education">
      <div class="card-items">
        <div class="img-container">
          <img
            class="img"
            src="../../public/university.svg"
            alt="education image card"
          />
        </div>
        <div class="txt-container">
          <p class="txt">
            <span class="cart-title">{{
              t('education.university.university')
            }}</span>
            <br /><span class="question">{{
              t('education.university.university_name')
            }}</span
            >:
            <span class="answer">{{
              t('education.payan-noor.a-university_name')
            }}</span>
            <br />
            <span>{{ t('education.university.location') }}</span
            >: <span>{{ t('education.payan-noor.a-location') }}</span> <br />
            <span>{{ t('education.university.certificate') }}</span
            >: <span>{{ t('education.payan-noor.a-certificate') }}</span> <br />
            <span>{{ t('education.university.field_of_study') }}</span
            >: <span>{{ t('education.payan-noor.a-field_of_study') }}</span>
            <br />
            <span>{{ t('education.payan-noor.a-date') }}</span>
          </p>
        </div>
      </div>
      <div class="card-items">
        <div class="img-container">
          <img
            class="img"
            src="../../public/university.svg"
            alt="education image card"
          />
        </div>
        <div class="txt-container">
          <p class="txt">
            <span class="title">{{
              t('education.university.university')
            }}</span>
            <br /><span class="question">{{
              t('education.university.university_name')
            }}</span
            >:
            <span class="answer">{{
              t('education.jondi-shapoor.a-university_name')
            }}</span>
            <br /><span class="question">{{
              t('education.university.location')
            }}</span
            >:
            <span class="answer">{{
              t('education.jondi-shapoor.a-location')
            }}</span>
            <br /><span class="question">{{
              t('education.university.certificate')
            }}</span
            >:
            <span class="answer">{{
              t('education.jondi-shapoor.a-certificate')
            }}</span>
            <br /><span class="question">{{
              t('education.university.field_of_study')
            }}</span
            >:
            <span class="answer">{{
              t('education.jondi-shapoor.a-field_of_study')
            }}</span>
            <br /><span class="answer">{{
              t('education.jondi-shapoor.a-date')
            }}</span>
          </p>
        </div>
      </div>
      <div class="card-items">
        <div class="img-container">
          <img
            class="img"
            src="../../public/school.svg"
            alt="education image card"
          />
        </div>
        <div class="txt-container">
          <p class="txt">
            <span class="title">{{ t('education.education.education') }}</span>
            <br /><span class="question">{{
              t('education.education.high_school_name')
            }}</span
            >:
            <span class="answer">{{
              t('education.talaye-daran.a-hight_school_name')
            }}</span>
            <br /><span class="question">{{
              t('education.education.location')
            }}</span
            >:
            <span class="answer">{{
              t('education.talaye-daran.a-location')
            }}</span>
            <br /><span class="question">{{
              t('education.education.certificate')
            }}</span
            >:
            <span class="answer">{{
              t('education.talaye-daran.a-certificate')
            }}</span>
            <br /><span class="question">{{
              t('education.education.grade')
            }}</span
            >:
            <span class="answer">{{
              t('education.talaye-daran.a-grade')
            }}</span>
            <br /><span class="answer">{{
              t('education.talaye-daran.a-date')
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.education-container {
  padding: 0 25vw;
  padding-top: 3rem;
  .education {
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
  .education-container {
    padding: 0 16vw;
    .education {
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
