<template>
  <div id="app">
    <Header/>
    <div id="wrapper" class="d-flex">
      <SideBar class='col-md-3 px-0' v-if='isblankLink'/>
      <router-view class="page-content-wrapper col-md-9"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import SideBar from '@/components/layout/SideBar'

export default {
  components: {
    Header,
    SideBar
  },
  computed: {
    isblankLink () {
      return !!(this.$route.params.express)
    }
  }

}
</script>

<style>

</style>
