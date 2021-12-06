<script setup lang="ts">
const { t } = useI18n();
let contentItem = 'contact_info';
</script>

<template>
  <div class="personal-info-container">
    <div class="personal-info">
      <div class="tabs"></div>
      <div class="content">
        <div class="texts" v-if="contentItem == 'contact_info'">
          <pre>
            {{t('')}}
          </pre>
        </div>
        <div
          class="photo-containers"
          v-if="contentItem == 'contact_info'"
        ></div>

        <div class="texts" v-if="contentItem == 'personal_info'">
          <pre>
            {{t('')}}
          </pre>
        </div>
        <div
          class="photo-containers"
          v-if="contentItem == 'personal_info'"
        ></div>

        <div class="texts" v-if="contentItem == 'employment_status'">
          <pre>
            {{t('')}}
          </pre>
        </div>
        <div
          class="photo-containers"
          v-if="contentItem == 'employment_status'"
        ></div>

        <div class="texts" v-if="contentItem == 'social_medias'">
          <pre>
            {{t('')}}
          </pre>
        </div>
        <div
          class="photo-containers"
          v-if="contentItem == 'social_medias'"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.personal-info-container {
  background-image: url('../../public/background.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-color: #10102d;
  height: 60vw;
  color: #fff;
  .personal-info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
