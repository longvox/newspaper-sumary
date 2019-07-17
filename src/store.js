import Vue from 'vue'
import Vuex from 'vuex'
import {
  data
} from './components/assets/data'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(require('vue-moment'))
Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    dataAll: {},
    flag: false
  },
  getters: {
    getDataAll (state) {
      return state.dataAll
    }
  },
  mutations: {
    getData (state, data) {
      state.dataAll = data
      state.flag = true
    }
  },
  actions: {
    getData ({ commit }) {
      let dataAll = {}
      Object.keys(data).forEach(key => {
        dataAll[key] = {}
        data[key].forEach(async item => {
          await axios
            .get('https://rss22json.herokuapp.com/api.json?rss_url=' + item.rss_url)
            .then(response => {
              dataAll[key][item.category] = response.data.items
            })
        })
      })
      commit('getData', dataAll)
    }
  }
})
