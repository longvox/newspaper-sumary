<template>
  <div class="bg-light border-right">
      <div class="list-group list-group-flush">
      <router-link
      tag="a" v-for='(item,key) in listSubData'
      :to='{ name: "subexpress", params: { express: $route.params.express  , category: item.category }}'
      class="list-group-item bg-dark"
      :key='key' active-class='active'>{{item.name}}</router-link>
      </div>
    </div>
</template>

<script>
import { data } from '../assets/data'
export default {
  data () {
    return {
      listSubData: []
    }
  },
  watch: {
    $route (to, from) {
      if (to.params.express !== from.params.express) {
        this.reload()
      }
      // if (!data[this.$route.params.express].find(item =>
      //   item.category === this.$route.params.category)) {
      //   this.$router.push({ name: 'notfound' })
      // }
    }
  },
  created () {
    this.reload()
  },
  methods: {
    reload () {
      if (!data[this.$route.params.express]) {
        this.$router.push({ name: 'notfound' })
      }
      this.listSubData = data[this.$route.params.express]
    }
  }
}
</script>
