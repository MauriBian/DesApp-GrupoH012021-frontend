import axios from 'axios'

export default {
  state: {
    jwt: null,
    username: null,
    platformUsage: []
  },

  mutations: {
    setUsername (state, payload) {
      state.username = payload.username
    },

    setJWT(state, payload) {
      state.jwt = payload.jwt
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

    async subscribe ({ state }, { selectedMovie, url }) {

      try {
        const result = await axios.post('https://frozen-garden-00911.herokuapp.com/api/subscribe/platformcontent', {
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
        const result = await axios.get('https://frozen-garden-00911.herokuapp.com/api/platformusage?platformname=' + state.username, {
          headers: {
            'Api-key': state.jwt
          }
        })
        state.platformUsage = result.data
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
    },

    getPlatformUsage: state => {
      return state.platformUsage
    },

    getUserInfo: state => {
      return state.username
    }
  }
}
