<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="soft-skills-container" id="position-soft-skills">
    <div class="soft-skills">
      <div class="soft-skills-item">{{ t('soft_skills.sympathy') }}</div>
      <div class="soft-skills-item">{{ t('soft_skills.problem-solving') }}</div>
      <div class="soft-skills-item">{{ t('soft_skills.self_confidence') }}</div>
      <div class="soft-skills-item">{{ t('soft_skills.self-awareness') }}</div>
      <div class="soft-skills-item">{{ t('soft_skills.self_knowledge') }}</div>
      <div class="soft-skills-item">{{ t('soft_skills.leadership') }}</div>
      <div class="soft-skills-item">
        {{ t('soft_skills.conflict_resolution') }}
      </div>
      <div class="soft-skills-item">
        {{ t('soft_skills.crisis_management') }}
      </div>
      <div class="soft-skills-item">
        {{ t('soft_skills.the_power_to_influence_others') }}
      </div>
      <div class="soft-skills-item">
        {{ t('soft_skills.creativity_and_idea_generation') }}
      </div>
      <div class="soft-skills-item">{{ t('soft_skills.responsibility') }}</div>
      <div class="soft-skills-item">
        {{ t('soft_skills.decision-making_power') }}
      </div>
      <div class="soft-skills-item">{{ t('soft_skills.team_work') }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.soft-skills-container {
  padding-top: 8rem;
  .soft-skills {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 0 16vw;
    grid-gap: 1em;
    .soft-skills-item {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      padding: 2vw;
      text-align: center;
      border-radius: 1rem;
    }
  }
}
@media screen and (max-width: 940px) {
  .soft-skills-container {
    padding: 4rem 0 2rem 0;
    .soft-skills {
      grid-template-columns: auto auto;
      display: grid;
      padding: 0 10vw;
      grid-gap: 1em;
      .soft-skills-item {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        padding: 2vw;
        text-align: center;
        border-radius: 1rem;
      }
    }
  }
}
</style>
