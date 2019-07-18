<template>
  <div class='hello'>
    <div class='container mb-3'>
      <div class='row'>
        <Article
          v-for='(article, key) in listNewsPaper'
          :key='key'
          :article='article'
          class='container-fluid'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Article from './Article'
import { data } from './assets/data'

export default {
  name: 'HelloWorld',
  data () {
    return {
      listNewsPaper: [],
      rss_url: '',
      category: ''
    }
  },
  components: {
    Article
  },
  watch: {
    $route (to, from) {
      this.updateContent()
    }
  },
  created () {
    if (!this.$store.state.flag) {
      this.loadFirstContent()
    } else {
      this.updateContent()
    }
  },
  mounted () {
    if (!this.$store.state.flag) {
      this.$store.dispatch('getData')
    }
  },
  methods: {
    updateContent () {
      let params = this.$route.params
      let category = params.category || 'trang-chu'
      let express = params.express || 'vnexpess'
      this.listNewsPaper = this.$store.state.dataAll[express][category]
    },
    loadFirstContent () {
      let params = this.$route.params
      let express = params.express || 'vnexpess'

      let item = {}
      if (params.category) {
        item = data[express].find(item => item.category === params.category)
      } else {
        item = data[express].find(item => item.category === 'trang-chu')
      }
      this.axios
        .get('https://rss22json.herokuapp.com/api.json?rss_url=' + item.rss_url)
        .then(response => {
          this.listNewsPaper = response.data.items
        })
    }
  }
}
</script>
