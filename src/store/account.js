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
        const result = await axios.post('http://localhost:8080/api/clientplatforms', {
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

    async subscribe ({ state }, { selectedMovie, url }) {

      try {
        const result = await axios.post('http://localhost:8080/api/platformcontents/subscribe', {
          contentImdbId: selectedMovie,
          username: state.username,
          url: url
        }, {
          headers: {
            'Api-key': state.jwt
          }
        })
        return result
      } catch (error) {
        return 'Error'
      }
    },

    async platformUsage ({ state }) {
      try {
        const result = await axios.get('http://localhost:8080/api/platformusage?platformname=' + state.username, {
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
        const result = await axios.post('http://localhost:8080/login', {
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
