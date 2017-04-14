<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button :on-click="pop">Back</v-ons-back-button>
      </div>
      <div class="center"><slot>プロフィール設定</slot></div>
    </v-ons-toolbar>
    <div class="register">
      <h4>Step1-2</h4>
      <p>
        あなたの専攻に一番近い分野を選んでね！
      </p>
      <p>
        同じ専攻の先輩を探せるよ。
      </p>
      <v-ons-list>
        <v-ons-list-item v-for="item in department" v-bind:key="item.key" modifier="chevron" tappable><div v-bind:name="item.value" v-on:click="selectDepartment">{{item.text}}</div></v-ons-list-item>
      </v-ons-list>
      <div class="skip-select">
        <a v-on:click="gotoNext">専攻選択をスキップする</a>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import { mapActions } from 'vuex'
import Step4 from './Step4'

export default {
  name: 'register',
  props: ['pageStack'],
  data: function () {
    return {
      university: '',
      department: [
        {
          value: '人文科学系',
          text: '人文科学系'
        },
        {
          value: '社会科学系',
          text: '社会科学系'
        },
        {
          value: '自然科学系',
          text: '自然科学系'
        },
        {
          value: '医学・医療・家政・体育',
          text: '医学・医療・家政・体育'
        },
        {
          value: 'その他',
          text: 'その他'
        }
      ]
    }
  },
  watch: {
    university: function () {}
  },
  methods: {
    pop: function () {
      this.pageStack.pop()
    },
    gotoNext: function () {
      this.pageStack.push(Step4)
    },
    selectDepartment: function (event) {
      this.gotoNext()
    },
    ...mapActions([
      'showLoading',
      'hideLoading'
    ])
  }
}
</script>

<style>
p {
  padding-right: 10px;
  padding-left: 10px;
  font-size: 15px;
}
p.complete {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
h4 {
  padding-right: 10px;
  padding-left: 10px;
}
.search-result .list__item {
  padding-left: 0;
}
.search-result .list__item .list__item__center {
  padding: 0;
}
.select-university {
  padding: 12px 6px 12px 14px;
  display: block;
  width: 100%;
}
.skip-select {
  margin-top: 50px;
  padding: 0 20px;
  text-align: center;
  font-size: 12px;
}
</style>
