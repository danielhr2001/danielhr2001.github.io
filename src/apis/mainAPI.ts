import axios from 'axios'
import cookiz from 'js-cookie'

import addInterceptors from './mainAPI_Interceptors'

const token = cookiz.get('AUTH_TOKEN')

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL?.toString(),
  headers: {
    ...(token ? { Authorization: `token ${token}` } : {}), // add auth token only if it exists
  },
})

// add interceptors to log requests
addInterceptors(api)

export { api }
