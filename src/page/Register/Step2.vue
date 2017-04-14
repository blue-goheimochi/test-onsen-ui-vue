<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center"><slot>プロフィール設定</slot></div>
    </v-ons-toolbar>
    <div class="register">
      <p class="complete">登録完了！</p>
      <h4>Step1</h4>
      <p>
        大学・専攻・興味を登録してあなたに近い先輩を探そう！
      </p>
      <v-ons-list>
        <v-ons-list-header>
          大学名で検索
        </v-ons-list-header>
        <v-ons-list-item>
          <v-ons-input
            placeholder="例）とうきょうだいがく"
            class="input-univ"
            v-bind:value="university"
            v-on:input="inputUniversity"
          >
          </v-ons-input>
        </v-ons-list-item>
      </v-ons-list>
      <v-ons-list class="search-result">
        <v-ons-list-header>検索結果</v-ons-list-header>
        <v-ons-list-item v-for="item in searchItems" v-bind:key="item.key" v-show="searchItems.length > 0" modifier="longdivider"><div class="select-university" v-bind:name="item.key" v-on:click="selectUniversity">{{item.name}}</div></v-ons-list-item>
        <v-ons-list-item v-show="searchItems.length == 0"><div class="select-university">{{searchResultText}}</div></v-ons-list-item>
      </v-ons-list>
      <div class="skip-select">
        <a v-on:click="gotoNext">大学選択をスキップする</a>
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
    inputUniversity: function (event) {
      this.university = event.target.value
      if (this.university.indexOf('とう') === 0) {
        this.searchItems = [
          {
            key: 1,
            name: '東京大学'
          },
          {
            key: 2,
            name: '東京学芸大学'
          },
          {
            key: 3,
            name: '東京理科大学'
          },
          {
            key: 4,
            name: '東京国際大学'
          },
          {
            key: 5,
            name: '東京基督教大学'
          }
        ]
      } else {
        this.searchItems = []
        if (this.university.length < 2) {
          this.searchResultText = '大学名を入力してください'
        } else {
          this.searchResultText = '大学名が検索できません'
        }
      }
    },
    selectUniversity: function (event) {
      this.gotoNext()
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
.list-header {
  padding: 10px;
  font-weight: bold;
}
.list-header.list-header--material {
  padding: 20px 0 0 15px;
}
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
.input-univ {
  width: 100%;
}
.search-result .list-item {
  padding-left: 0;
}
.search-result .list-item .list-item__center {
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
