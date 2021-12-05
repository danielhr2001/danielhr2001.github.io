import type { AxiosInstance } from 'axios'
// import router from '@/plugins/router'

const verbose = true
/**
 * Add interceptors to Axios instance
 */
export default function (api: AxiosInstance): AxiosInstance {
  api.interceptors.request.use(
    (config) => {
      console.log(
        '<mainAPI>',
        '[' + config.method?.toUpperCase() + ']',
        'Request to',
        '{' + config.url + '}',
        verbose ? config : ''
      )

      return config
    },
    (error) => {
      console.error(
        '<mainAPI>',
        '[Request Error]',
        // '(' + error.request.config.method.toUpperCase() + ')',
        // '{' + error.request.config.url + '}',
        error?.request || error
      )

      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => {
      console.log(
        '<mainAPI>',
        '[Response]',
        'from',
        '{' + response.config.url + '}',
        verbose ? response : ''
      )

      return response
    },
    (error) => {
      switch (error.response?.status) {
        case 401:
          // router.push('/login')
          break
      }

      !error.response
        ? console.error(error)
        : console.error(
            '<mainAPI>',
            '[Response Error]',
            '(' + error.response.config.method.toUpperCase() + ')',
            '{' + error.response.config.url + '}',
            error.response.data
          )

      return Promise.reject(error)
    }
  )

  return api
}
