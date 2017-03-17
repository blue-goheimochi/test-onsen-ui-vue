<template>
  <div class="page2">
    <v-ons-page>
      <v-ons-button v-on:click="pop">Back Page 1</v-ons-button>
      <p style="text-align: center">This is the second page</p>
    </v-ons-page>
  </div>
</template>

<script>
export default {
  name: 'page2',
  props: ['pageStack'],
  methods: {
    pop: function () {
      this.pageStack.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
