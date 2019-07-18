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
    flag: false,
    dataSearch: [],
    searchStatus: false
  },
  getters: {
    getDataAll (state) {
      return state.dataAll
    }
  },
  mutations: {
    setData (state, data) {
      state.dataAll = data
      state.flag = true
    },
    setDataSearch (state, data) {
      state.dataSearch = data
    },
    setSearchStatus (state, data) {
      state.searchStatus = data
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
      commit('setData', dataAll)
    },
    matchDataSearch ({ commit }, keywords) {
      let dataAll = this.state.dataAll
      let dataSearch =
        Object
          .keys(this.state.dataAll)
          .reduce((acc, key) => {
            return [
              ...acc,
              ...Object
                .keys(dataAll[key])
                .reduce((ac, category) => {
                  return [
                    ...ac,
                    ...dataAll[key][category]
                      .filter(item => item.title.indexOf(keywords) >= 0)
                  ]
                }, [])
            ]
          }, [])
      dataSearch.length = Math.min(dataSearch.length, 30)
      dataSearch = dataSearch || []

      commit('setDataSearch', dataSearch)
    },
    statusSearch ({ commit }, status) {
      commit('setSearchStatus', status)
    }
  }
})
