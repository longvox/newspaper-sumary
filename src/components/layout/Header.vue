<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link
      tag="a"
      class="navbar-brand"
      :to="{ name: &quot;homepage&quot;}"
      active-class="active"
    >
      Báo tổng hợp
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarColor01"
    >
      <headerLink />
      <Search />
    </div>
  </nav>
</template>
<script>
import HeaderLink from './HeaderLink'
import Search from './Search'
export default {
  components: {
    HeaderLink,
    Search
  }
}
</script>
