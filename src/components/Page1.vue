<template>
  <div class="page1">
    <v-ons-page>
      <p style="text-align: center">
        This is the first page
        <v-ons-button v-on:click="push">Push Page 2</v-ons-button>
      </p>
    </v-ons-page>
  </div>
</template>

<script>
import page2 from './Page2'

export default {
  name: 'page1',
  props: ['pageStack'],
  methods: {
    push: function () {
      this.pageStack.push(page2)
      console.log(this.pageStack)
    },
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
