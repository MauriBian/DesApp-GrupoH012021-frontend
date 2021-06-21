import axios from 'axios'

export default {
  state: {
    jwt: null
  },

  mutations: {
  },
  actions: {
    async register ({ state }, { username, password, platformName }) {
  
      const result = axios.post('https://frozen-garden-00911.herokuapp.com/api/clientplatforms', {
        username,
        password,
        platformName
      }).then(response => {
        state.jwt = response.data.apiKey
        console.log(state)
        return response.data.apiKey
      })
      .catch(response => {
        console.log(response)
        return 'Error'
      })
      return result

    },

    async login (state , { username, password }) {
      const result = await axios.post('https://frozen-garden-00911.herokuapp.com/login', {
        username,
        password
      }).then(response => response.status)
      .catch(response => {
        console.log(response)
        return
      })

      return result

    }
  },
  getters: {
    getJWT: state => {
      return state.jwt
    }
  }
}
