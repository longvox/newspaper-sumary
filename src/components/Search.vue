<template>
  <div>
    <div class='container mb-3'>
      <div class='row' v-if='dataSearch.length >= 0'>
        <Article
          v-for='(article, key) in dataSearch'
          :key='key'
          :article='article'
          class='container-fluid'
        />
      </div>
      <div class='row' v-else>
        <p>Không có bài viết nào</p>
      </div>
    </div>
  </div>
</template>

<script>
import Article from './Article'
export default {
  data () {
    return {
      dataSearch: this.$store.state.dataSearch
    }
  },
  components: {
    Article
  }
}
</script>
