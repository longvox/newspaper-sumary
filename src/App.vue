<template>
  <div id="app">
    <Header />
    <div
      id="wrapper"
      class="d-flex"
    >
      <SideBar
        class="col-md-3 px-0"
        v-if="isblankLink"
      />
      <router-view class="page-content-wrapper col-md-9" />
      <PopupSearch />
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import SideBar from '@/components/layout/SideBar'
import PopupSearch from '@/components/PopupSearch'
export default {
  components: {
    Header,
    SideBar,
    PopupSearch
  },
  computed: {
    isblankLink () {
      return !!(this.$route.params.express)
    }
  }

}
</script>

<style>
#wrapper{
  position: relative
}
</style>
