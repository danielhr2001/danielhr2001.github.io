import type { Ref } from 'vue'

/**
 * Take a ref or function and wait until it returns truthy then resolve.
 * reject if timeout is reached.
 */
export async function waitUntil(
  condition: Ref | (() => unknown),
  interval = 50,
  timeout = 5000
): Promise<void> {
  return new Promise((resolve, reject) => {
    const intervalInstance = setInterval(() => {
      if (condition instanceof Function ? condition() : unref(condition)) {
        clearInterval(intervalInstance)
        resolve()
      }
    }, interval)

    setTimeout(() => {
      clearInterval(intervalInstance)
      reject()
    }, timeout)
  })
}
