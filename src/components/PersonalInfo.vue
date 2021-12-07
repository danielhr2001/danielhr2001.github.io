<script lang="ts">
export default defineComponent({
  data() {
    return {
      contentItem: 'contact_info',
    };
  },

  // method(){
  //   function contact_info(){
  //     $data.contentItem = 'contact_info'
  //   }
  // },
});
</script>
<script setup lang="ts">
const { t, locale } = useI18n();
function contact_info() {
  document.getElementById('contact_info-container').style.display = 'flex';
  document.getElementById('personal-container').style.display = 'none';
  document.getElementById('job_status-container').style.display = 'none';
  document.getElementById('social_medias-container').style.display = 'none';
}
function personal() {
  document.getElementById('contact_info-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'flex';
  document.getElementById('job_status-container').style.display = 'none';
  document.getElementById('social_medias-container').style.display = 'none';
}
function job_status() {
  document.getElementById('contact_info-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'none';
  document.getElementById('job_status-container').style.display = 'flex';
  document.getElementById('social_medias-container').style.display = 'none';
}
function social_medias() {
  document.getElementById('contact_info-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'none';
  document.getElementById('job_status-container').style.display = 'none';
  document.getElementById('social_medias-container').style.display = 'flex';
}
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
          <div class="texts-containers">
            <pre v-if="locale == 'fa'" class="text" style="direction: rtl">
              <span class="question">{{ t('contact_info.address') }}</span> :

                <span class="answer">{{t('contact_info.a-address')}}</span>
              
              <span class="question">{{ t('contact_info.phone') }}</span> :
              
                <span class="answer">{{t('contact_info.a-phone')}}</span>
              
              <span class="question">{{ t('contact_info.email') }}</span> :
                
                <span class="answer">Danial.hajirajabi.79@gmail.com</span>

            </pre>
            <pre v-else class="text">
              <span class="question">{{ t('contact_info.address') }}</span> :

                <span class="answer">{{t('contact_info.a-address')}}</span>

              <span class="question">{{ t('contact_info.phone') }}</span> :

                <span class="answer">+989019167289</span>

              <span class="question">{{ t('contact_info.email') }}</span> :

                <span class="answer">Danial.hajirajabi.79@gmail.com</span>

            </pre>
          </div>
          <div class="picture-containers">
            <img
              src="../../public/cantact.svg"
              alt="contact_info picture"
              class="picture"
            />
          </div>
        </div>
        <div id="personal-container" class="content" style="display: none;">
          <div class="texts-containers">
            <pre v-if="locale == 'fa'" class="text" style="direction: rtl">
              <span class="question">{{ t('personal.age') }}</span> :

                <span class="answer">{{t('personal.a-age')}}</span>
              
              <span class="question">{{ t('personal.gender') }}</span> :

                <span class="answer">{{t('personal.a-gender')}}</span>
              
              <span class="question">{{ t('personal.marital_status') }}</span> :
                
                <span class="answer">{{t('personal.a-marital_status')}}</span>

            </pre>
            <pre v-else class="text">
              <span class="question">{{ t('personal.age') }}</span> :

                <span class="answer">{{t('personal.a-age')}}</span>
              
              <span class="question">{{ t('personal.gender') }}</span> :
              
                <span class="answer">{{t('personal.a-gender')}}</span>
              
              <span class="question">{{ t('personal.marital_status') }}</span> :
                
                <span class="answer">{{t('personal.a-marital_status')}}</span>

            </pre>
          </div>
          <div class="picture-containers">
            <img
              src="../../public/personal_information.svg"
              alt="personal picture"
              class="picture"
            />
          </div>
        </div>
        <div id="job_status-container" class="content" style="display: none;">
          <div class="texts-containers">
            <pre v-if="locale == 'fa'" class="text" style="direction: rtl">
              <span class="question">{{ t('job_status.job_status') }}</span> :

                <span class="answer">{{t('job_status.a-job_status')}}</span>
              
              <span class="question">{{ t('job_status.the_type_of_job_in_question') }}</span> :
              
                <span class="answer">{{t('job_status.a-the_type_of_job_in_question')}}</span>
              
              <span class="question">{{ t('job_status.intended_income') }}</span> :
                
                <span class="answer">{{t('job_status.a-intended_income')}}</span>
              
              <span class="question">{{ t('job_status.cities_i_like_to_work_in') }}</span> :
                
                <span class="answer">{{t('job_status.a-cities_t_like_to_work_in')}}</span>

            </pre>
            <pre v-else class="text">
              <span class="question">{{ t('job_status.job_status') }}</span> :

                <span class="answer">{{t('job_status.a-job_status')}}</span>
              
              <span class="question">{{ t('job_status.the_type_of_job_in_question') }}</span> :
              
                <span class="answer">{{t('job_status.a-the_type_of_job_in_question')}}</span>
              
              <span class="question">{{ t('job_status.intended_income') }}</span> :
                
                <span class="answer">{{t('job_status.a-intended_income')}}</span>
              
              <span class="question">{{ t('job_status.cities_i_like_to_work_in') }}</span> :
                
                <span class="answer">{{t('job_status.a-cities_t_like_to_work_in')}}</span>

            </pre>
          </div>
          <div class="picture-containers">
            <img
              src="../../public/job.svg"
              alt="job_status picture"
              class="picture"
            />
          </div>
        </div>
        <div id="social_medias-container" class="content" style="display: none;">
          <div class="texts-containers">
            <pre v-if="locale == 'fa'" class="text" style="direction: rtl">
              <span class="question">{{ t('social_medias.telegram') }}</span> :

                <span class="answer">@Haji_rajabi</span>
              
              <span class="question">{{ t('social_medias.twitter') }}</span> :
              
                <span class="answer">@Daniyal_Iran79</span>
              
              <span class="question">{{ t('social_medias.github') }}</span> :
                
                <span class="answer">{{ t('social_medias.a-github') }}</span>
              
              <span class="question">{{ t('social_medias.glassdoor') }}</span> :
                
                <span class="answer">Danial Hajirajabi</span>
              
              <span class="question">{{ t('social_medias.linkedin') }}</span> :
                
                <span class="answer">Danial Hajirajabi</span>

            </pre>
            <pre v-else class="text">
              <span class="question">{{ t('social_medias.telegram') }}</span> :

                <span class="answer">@Haji_rajabi</span>
              
              <span class="question">{{ t('social_medias.twitter') }}</span> :
              
                <span class="answer">@Daniyal_Iran79</span>
              
              <span class="question">{{ t('social_medias.github') }}</span> :
                
                <a href="https://github.com/danielhr2001"><span class="answer" style="color:#6C63FF">{{ t('social_medias.a-github') }}</span></a><span></span>
              
              <span class="question">{{ t('social_medias.glassdoor') }}</span> :
                
                <span class="answer">Danial Hajirajabi</span>
              
              <span class="question">{{ t('social_medias.linkedin') }}</span> :
                
                <span class="answer">Danial Hajirajabi</span>

            </pre>
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
  background-image: url('../../public/background.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 50vw;
  color: #fff;
  .personal-info {
    display: block;
    margin: 0 auto;
    .tabs-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5vw;
      // background-color: pink;
      .tabs {
        z-index: 20;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        width: 54%;
        overflow: hidden;
        border-radius: 15px 15px 0 0;
        .tab-item {
          background-color: #fff;
          display: flex;
          // row-gap: 2px;
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
        // background-color: red;
        .texts-containers {
          width: 50%;
          z-index: 20;
          // background-color: aqua;

          .text {
            font-size: 20px;
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
</style>
