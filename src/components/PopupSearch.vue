<template>
  <div class="popup-search">
    <div
      class="list-group"
      v-if="$store.state.searchStatus"
    >
      <a
        class="list-group-item list-group-item-action"
        v-for="(item,key) in listSearch"
        :key="key"
        :href="item.link"
      >{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listSearch () {
      return this.$store.state.dataSearch
    }

  }
}
</script>

<style scoped>
.popup-search {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  width: 330px;
}
</style>
