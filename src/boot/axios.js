// import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'http://localhost:3000/api/v1' // Replace this with your base URL
//   // You can add other default configuration options here if needed
// })

// export default instance
// src/plugins/axios-plugin.js
import axios from 'axios'

// export default {
//   install: (app, baseURL) => {
//     const instance = axios.create({
//       baseURL
//     })
//     app.config.globalProperties.$axios = instance
//   }
// }
const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json'
  }
})
export default api
