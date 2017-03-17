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
        学部・学科を選択してください
      </p>
      <v-ons-list>
        <v-ons-list-header>
          学部
        </v-ons-list-header>
        <v-ons-list-item modifier="chevron" tappable>学部を選択</v-ons-list-item>
      </v-ons-list>
      <v-ons-list>
        <v-ons-list-header>
          学科
        </v-ons-list-header>
        <v-ons-list-item modifier="chevron" tappable>学科を選択</v-ons-list-item>
      </v-ons-list>
      <div class="skip-select">
        <a v-on:click="gotoNext">学部・学科入力をスキップする</a>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import { mapActions } from 'vuex'
import Step3 from './Step3'

export default {
  name: 'register',
  props: ['pageStack'],
  data: function () {
    return {
      university: '',
      department: [
        {
          value: '選択してください',
          text: '選択してください'
        },
        {
          value: '経済学部',
          text: '経済学部'
        },
        {
          value: '人文学部',
          text: '人文学部'
        },
        {
          value: 'その他',
          text: 'その他'
        }
      ],
      selectedDepartment: '選択してください',
      searchItems: [],
      searchResultText: '大学名を入力してください'
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
      this.pageStack.push(Step3)
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
