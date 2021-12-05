import { throttle } from 'lodash-es'
import type { Ref } from 'vue'

interface DetectEndOfPageOptions {
  reachedEndOfPage: Ref<boolean>
}

export function useDetectEndOfPage(offset = 500): DetectEndOfPageOptions {
  const reachedEndOfPage = ref(false)
  const endOfPageOffset = ref(offset) // trigger the event n pixels sooner

  const documentHeight = document.body.offsetHeight
  const windowHeight = window.innerHeight // 100vh

  // 3 versions of scrolled amount
  const documentScrollTop = document.documentElement.scrollTop
  const windowScrollTop = window.pageYOffset
  const windowYOffset = window.pageYOffset

  const yOffset = computed(() =>
    Math.max(documentScrollTop, windowScrollTop, windowYOffset)
  )
  const scrolledAmount = computed(() => windowHeight + yOffset.value)

  /**
   * detect if the user has reached the end of the page
   */
  function detectEndOfPage() {
    const reachedBottom =
      documentHeight - 1 - endOfPageOffset.value <= scrolledAmount.value
    reachedEndOfPage.value = reachedBottom
    // console.log('scroll pos changed; reachedNearBottom:' + reachedBottom)
  }

  const throttledDetectEndOfPage = throttle(detectEndOfPage, 200, {
    leading: false,
    trailing: true,
  })

  onMounted(() => {
    window.onscroll = throttledDetectEndOfPage
  })
  onUnmounted(() => {
    window.onscroll = null
  })

  return { reachedEndOfPage }
}
