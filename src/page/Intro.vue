<template>
  <v-ons-page>
    <div id="intro">
      <v-ons-carousel :index="carouselIndex" fullscreen swipeable auto-scroll overscrollable>
        <v-ons-carousel-item v-for="item in items"  v-bind:key="item.text" :style="{backgroundColor: item.bg}">
          <div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">{{item.text}}</div>
        </v-ons-carousel-item>
      </v-ons-carousel>
      <div class="button-bar">
        <div class="indicator-wrap">
          <span class="indicator" v-bind:class="{ active: carouselIndex==index }"  v-for="(item, index) in items" v-on:click="setActiveCarouselIndex(index)">{{index}}</span>
        </div>
      </div>
      <div style="width: 100%; position: absolute; bottom: 10px;">
        <div style="padding: 0 10px;">
          <v-ons-button modifier="large" v-on:click="gotoRegister">はじめる</v-ons-button>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import RegisterStep1 from './Register/Step1'

export default {
  name: 'intro',
  props: ['pageStack'],
  data: function () {
    return {
      carouselIndex: 0,
      items: [
        {
          text: 'BLUE',
          bg: '#085078'
        },
        {
          text: 'DARK',
          bg: '#373B44'
        },
        {
          text: 'ORANGE',
          bg: '#D38312'
        }
      ]
    }
  },
  methods: {
    setActiveCarouselIndex: function (index) {
      this.carouselIndex = index
    },
    gotoRegister: function () {
      this.pageStack.push(RegisterStep1)
    }
  }
}
</script>

<style>
.button-bar {
  width: 100%;
  bottom: 70px;
  position: absolute;
}
.indicator-wrap {
  margin: 0 auto;
}
.indicator {
  display: inline-block;
  width: 13px;
  height: 13px;
  text-indent: -9999px;
  margin: 4px 8px;
  vertical-align: top;
  border-radius: 50%;
  background: #B2B2B2;
}
.indicator.active {
  background: #FFFFFF;
}
</style>
