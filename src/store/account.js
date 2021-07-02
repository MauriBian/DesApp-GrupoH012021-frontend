import axios from 'axios'

export default {
  state: {
    jwt: null,
    username: null
  },

  mutations: {
    setUserInfo (state, payload) {
      state.jwt = payload.jwt
      state.username = payload.username
    }
  },
  actions: {
    async register ({ state }, { username, password, platformName }) {

      try {
        const result = await axios.post('https://frozen-garden-00911.herokuapp.com/api/clientplatforms', {
          username,
          password,
          platformName
        })
        state.jwt = result.data.apiKey
        return result.data.apiKey  
      } catch (error) {
        return 'Error'
      }
    },

    async platformUsage ({ state }) {
      try {
        const result = await axios.get('https://frozen-garden-00911.herokuapp.com/api/platformusage?platformname=' + state.username, {
          headers: {
            'Api-key': state.jwt
          }
        })
        return result.data
      } catch {
        return 'Error'
      }

    },

    async login (state , { username, password }) {
      try {
        const result = await axios.post('https://frozen-garden-00911.herokuapp.com/login', {
        username,
        password
      })
      return result
      } catch {
        return
      }
    }
  },
  getters: {
    getJWT: state => {
      return state.jwt
    }
  }
}
