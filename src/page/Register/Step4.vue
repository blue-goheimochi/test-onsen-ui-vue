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
      <v-ons-list>
        <v-ons-list-header>人文科学系</v-ons-list-header>
        <v-ons-list-item v-for="item in department" modifier="chevron" tappable>{{item.text}}</v-ons-list-item>
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
          value: '文学・日本語・日本文学',
          text: '文学・日本語・日本文学'
        },
        {
          value: '言語・外国語・外国文学',
          text: '言語・外国語・外国文学'
        },
        {
          value: '歴史・地理・文化財',
          text: '歴史・地理・文化財'
        },
        {
          value: '哲学・心理・宗教',
          text: '哲学・心理・宗教'
        },
        {
          value: '人間科学・文化・教養',
          text: '人間科学・文化・教養'
        },
        {
          value: 'メディア・マスコミュニケーション・情報',
          text: 'メディア・マスコミュニケーション・情報'
        },
        {
          value: '教育',
          text: '教育'
        },
        {
          value: '芸術・デザイン',
          text: '芸術・デザイン'
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
