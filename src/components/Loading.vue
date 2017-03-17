<template>
  <div class="loading" v-bind:class="{show: status}">
    <div class="img-wrap"><img src="../assets/loading.svg" alt="Loading"></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['status']
}
</script>

<style scoped>
.loading {
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20000;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  display: none;
}
.loading.show {
  display: block;
}
.loading img {
  width: 40px;
  height: 40px;
}
.img-wrap {
  width: 100%;
  text-align: center;
  top: 50%;
  position: absolute;
}
</style>
