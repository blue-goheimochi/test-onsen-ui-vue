<template>
  <div id="app">
    <v-ons-navigator>
      <div :is="page" v-for="page in pageStack" :pageStack="pageStack"></div>
    </v-ons-navigator>
    <loading :status="getLoadingStatus"></loading>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Intro from './page/Intro'
import Loading from './components/Loading'

export default {
  name: 'app',
  components: {
    Loading
  },
  data: function () {
    return {
      pageStack: [Intro]
    }
  },
  computed: mapGetters([
    'getLoadingStatus'
  ])
}
</script>

<style>
</style>
