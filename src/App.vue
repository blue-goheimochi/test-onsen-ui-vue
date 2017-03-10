<template>
  <div id="app">
    <ons-navigator>
      <div :is="page" v-for="page in pageStack" :page_stack="pageStack"></div>
    </ons-navigator>
  </div>
</template>

<script>
import Page1 from './components/Page1'
import Page2 from './components/Page2'

export default {
  name: 'app',
  components: {
    Page1, Page2
  },
  data: function () {
    return {
      pageStack: [Page1, Page2]
    }
  }
}
</script>

<style>
</style>
