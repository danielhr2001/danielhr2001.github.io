<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="first-view-container">
    <div class="first-view">
      <div class="web-designer-container">
        <img id="web-designer" src="../../public/webDesigner.svg" />
        <span id="text">
          {{ t('backend_developer') }}
        </span>
      </div>
      <div class="ball-container">
        <img id="ball" src="../../public/ball.png" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.first-view-container {
  background-image: url('../../public/background-firstView.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  // height: 60vw;
  padding-top: 4rem;
  .first-view {
    .web-designer-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5% 10%;
      #web-designer {
      }
      #text {
        position: absolute;
        font-weight: bold;
        font-size: 1.5em;
        color: #fff;
        z-index: 1;
      }
    }
    .ball-container {
      display: flex;
      align-items: center;
      #ball {
        position: relative;
        width: 10%;
        height: auto;
        animation-name: ball;
        animation-duration: 10s;
        animation-iteration-count: infinite;
      }
    }
  }
}

@keyframes ball {
  0% {
    opacity: 100%;
    left: 15%;
  }
  50% {
    opacity: 0%;
    left: -10%;
  }
  100% {
    opacity: 100%;
    left: 15%;
  }
}
@media screen and (max-width: 940px) {
  .first-view-container {
    background-image: url('../../public/background-firstView.svg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    // height: 60vw;
    padding-top: 4rem;
    .first-view {
      .web-designer-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20% 10%;
        #web-designer {
          display: none;
        }
        #text {
          position: absolute;
          font-weight: bold;
          font-size: 1.5em;
          color: #fff;
          z-index: 1;
        }
      }
      .ball-container {
        display: flex;
        align-items: center;
        #ball {
          position: relative;
          width: 10%;
          height: auto;
          animation-name: ball;
          animation-duration: 10s;
          animation-iteration-count: infinite;
        }
      }
    }
  }
}
</style>
