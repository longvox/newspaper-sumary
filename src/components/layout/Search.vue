<template>
  <div>
    <form class="form-inline">
      <input class="form-control mr-sm-2"
      type="text"
      placeholder="Search"
      @input='inputSearch'
      v-model="keywords"
      @focus="statusActive(true)"
      @blur="statusActive(false)"/>
      <router-link
      tag='button'
      class="btn btn-success"
      :to='{name: "search"}'
      type="submit">Search</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '',
      status: false
    }
  },
  methods: {
    inputSearch () {
      this.$store.dispatch('matchDataSearch', this.keywords || '⠀')
    },
    statusActive (status) {
      this.$store.dispatch('statusSearch', status)
    }
  }
}
</script>
