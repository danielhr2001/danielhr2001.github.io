<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <div class="footer-container">
    <div class="footer">
      <p>{{ t('footer_text') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  background-color: #fff;

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
