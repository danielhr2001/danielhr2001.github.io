<script setup lang="ts">
const { t, locale } = useI18n();
import {
  contact_info,
  personal,
  job_status,
  social_medias,
} from '@/logic/personalInfoTabs';
</script>

<template>
  <div class="personal-info-container">
    <div class="personal-info">
      <div class="tabs-container">
        <div class="tabs">
          <div class="tab-item" id="contact_info" @click="contact_info">
            <span class="tab-item-text">{{
              t('personal_info.contact_info')
            }}</span>
          </div>
          <div class="tab-item" id="personal" @click="personal">
            <span class="tab-item-text">{{ t('personal_info.personal') }}</span>
          </div>
          <div class="tab-item" id="job_status" @click="job_status">
            <span class="tab-item-text">{{
              t('personal_info.job_status')
            }}</span>
          </div>
          <div class="tab-item" id="social_medias" @click="social_medias">
            <span class="tab-item-text">{{
              t('personal_info.social_medias')
            }}</span>
          </div>
        </div>
      </div>
      <div class="content-container">
        <div id="contact_info-container" class="content">
          <div class="texts-containers-personal-info">
            <p class="text">
              <span class="question">{{ t('contact_info.address') }}</span> :

              <br /><br class="br" /><span class="answer">{{
                t('contact_info.a-address')
              }}</span>

              <br /><br class="br" />
              <span class="question">{{ t('contact_info.phone') }}</span> :

              <br /><br class="br" />
              <span class="answer">+989019167289</span>

              <br /><br class="br" />
              <span class="question">{{ t('contact_info.email') }}</span> :

              <br /><br class="br" />
              <span class="answer">Danial.hajirajabi.79@gmail.com</span>
            </p>
          </div>
          <div class="picture-containers">
            <img
              src="../../public/cantact.svg"
              alt="contact_info picture"
              class="picture"
            />
          </div>
        </div>
        <div id="personal-container" class="content" style="display: none">
          <div class="texts-containers-personal-info">
            <p class="text">
              <span class="question">{{ t('personal.age') }}</span> :

              <br /><br class="br" />
              <span class="answer">{{ t('personal.a-age') }}</span>

              <br /><br class="br" />
              <span class="question">{{ t('personal.gender') }}</span> :

              <br /><br class="br" />
              <span class="answer">{{ t('personal.a-gender') }}</span>

              <br /><br class="br" />
              <span class="question">{{ t('personal.marital_status') }}</span> :

              <br /><br class="br" />
              <span class="answer">{{ t('personal.a-marital_status') }}</span>
            </p>
          </div>
          <div class="picture-containers">
            <img
              src="../../public/personal_information.svg"
              alt="personal picture"
              class="picture"
            />
          </div>
        </div>
        <div id="job_status-container" class="content" style="display: none">
          <div class="texts-containers-personal-info">
            <p class="text">
              <span class="question">{{ t('job_status.job_status') }}</span> :

              <br /><br class="br" />
              <span class="answer">{{ t('job_status.a-job_status') }}</span>

              <br /><br class="br" />
              <span class="question">{{
                t('job_status.the_type_of_job_in_question')
              }}</span>
              :

              <br /><br class="br" />
              <span class="answer">{{
                t('job_status.a-the_type_of_job_in_question')
              }}</span>

              <br /><br class="br" />
              <span class="question">{{
                t('job_status.intended_income')
              }}</span>
              :

              <br /><br class="br" />
              <span class="answer">{{
                t('job_status.a-intended_income')
              }}</span>

              <br /><br class="br" />
              <span class="question">{{
                t('job_status.cities_i_like_to_work_in')
              }}</span>
              :

              <br /><br class="br" />
              <span class="answer">{{
                t('job_status.a-cities_t_like_to_work_in')
              }}</span>
            </p>
          </div>
          <div class="picture-containers">
            <img
              src="../../public/job.svg"
              alt="job_status picture"
              class="picture"
            />
          </div>
        </div>
        <div id="social_medias-container" class="content" style="display: none">
          <div class="texts-containers-personal-info">
            <p class="text">
              <span class="question">{{ t('social_medias.telegram') }}</span> :

              <br /><br class="br" />
              <span class="answer">@Haji_rajabi</span>

              <br /><br class="br" />
              <span class="question">{{ t('social_medias.twitter') }}</span> :

              <br /><br class="br" />
              <span class="answer">@Daniyal_Iran79</span>

              <br /><br class="br" />
              <span class="question">{{ t('social_medias.github') }}</span> :

              <br /><br class="br" />
              <a href="https://github.com/danielhr2001"
                ><span class="answer" style="color: #6c63ff">{{
                  t('social_medias.a-github')
                }}</span></a
              >

              <br /><br class="br" />
              <span class="question">{{ t('social_medias.glassdoor') }}</span> :

              <br /><br class="br" />
              <span class="answer">Danial Hajirajabi</span>

              <br /><br class="br" />
              <span class="question">{{ t('social_medias.linkedin') }}</span> :

              <br /><br class="br" />
              <span class="answer">{{ t('social_medias.a-linkedin') }}</span>
            </p>
          </div>
          <div class="picture-containers">
            <img
              src="../../public/social-media.svg"
              alt="social_medias picture"
              class="picture"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.personal-info-container {
  color: #fff;
  .personal-info {
    display: block;
    margin: 0 auto;
    .tabs-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5vw;
      .tabs {
        z-index: 20;
        display: flex;
        align-items: center;
        width: 54%;
        overflow: hidden;
        border-radius: 15px 15px 0 0;
        .tab-item {
          background-color: #fff;
          display: flex;
          margin: 0 1px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 25%;
          height: 3.5vw;
          .tab-item-text {
            color: red;
            font-size: large;
          }
        }
      }
    }
    .content-container {
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 67%;
        .texts-containers-personal-info {
          width: 50%;
          z-index: 20;
          display: flex;
          overflow: hidden;

          .text {
            font-size: calc(10px + 0.5vw);
            font-weight: 900;
          }
        }
        .picture-containers {
          width: 50%;
          .picture {
          }
        }
      }
    }
  }
}
@media screen and (max-width: 940px) {
  .personal-info-container {
    color: #fff;
    .personal-info {
      display: block;
      margin: 0 auto;
      .tabs-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5vw;
        .tabs {
          z-index: 20;
          display: flex;
          align-items: center;
          width: 54%;
          overflow: hidden;
          border-radius: 15px 15px 0 0;
          .tab-item {
            background-color: #fff;
            display: flex;
            margin: 0 1px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 25%;
            height: 3.5vw;
            .tab-item-text {
              color: red;
              font-size: large;
            }
          }
        }
      }
      .content-container {
        display: flex;
        align-items: center;
        justify-content: center;
        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 67%;
          .texts-containers-personal-info {
            width: 100%;
            z-index: 20;
            display: flex;
            overflow: hidden;
            .br {
              display: none;
            }
            .text {
              font-size: calc(5px + 1.5vw);
              font-weight: 400;
            }
          }
          .picture-containers {
            display: none;
            .picture {
            }
          }
        }
      }
    }
  }
}
</style>
