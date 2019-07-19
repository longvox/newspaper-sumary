<template>
  <ul class="navbar-nav mr-auto">
    <router-link
      tag="li"
      class="nav-item"
      :to="{name:&quot;express&quot;, params: { express: firstLink, category: &quot;&quot;} }"
      active-class="active"
      exact
    >
      <a class="nav-link">{{ showNameCategory(firstLink) }}</a>
    </router-link>
    <router-link
      tag="li"
      class="nav-item"
      v-for="lheader in lastList(linkHeader)"
      :key="lheader"
      :to="{name:&quot;express&quot;, params: { express: lheader, category: &quot;&quot;} }"
      active-class="active"
    >
      <a class="nav-link">{{ showNameCategory(lheader) }}</a>
    </router-link>
  </ul>
</template>

<script>
import { data } from '../assets/data'
export default {
  data () {
    return {
      linkHeader: Object.keys(data),
      firstLink: Object.keys(data)[0]

    }
  },
  methods: {
    showNameCategory (category) {
      return data[category]['Name']
    },
    lastList (list) {
      return list.slice(1)
    }
  }
}
</script>
