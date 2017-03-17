<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button :on-click="pop">Back</v-ons-back-button>
      </div>
      <div class="center"><slot>新規登録</slot></div>
    </v-ons-toolbar>
    <div class="register">
      <ons-list>
        <ons-list-header>
          メールアドレス
        </ons-list-header>
        <ons-list-item>
          <v-ons-input
            placeholder="test@example.com"
          >
          </v-ons-input>
        </ons-list-item>
        <ons-list-header>
          パスワード
        </ons-list-header>
        <ons-list-item>
          <v-ons-input
            placeholder="6文字以上の英数字"
          >
          </v-ons-input>
        </ons-list-item>
      </ons-list>
      <div class="btn-register">
        <v-ons-button modifier="large" v-on:click="register">登録する</v-ons-button>
      </div>
      <div class="btn-login">
        <a v-on:click="gotoLogin">ログインはこちら</a>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import { mapActions } from 'vuex'
import Login from '../Login'
import Step2 from './Step2'

export default {
  name: 'register',
  props: ['pageStack'],
  methods: {
    pop: function () {
      this.pageStack.pop()
    },
    register: function () {
      this.showLoading()
      setTimeout(this.gotoStep2, 2000)
    },
    gotoStep2: function () {
      this.hideLoading()
      this.pageStack.push(Step2)
      this.pageStack.splice(1, 1)
    },
    gotoLogin: function () {
      this.pageStack.push(Login)
      return false
    },
    ...mapActions([
      'showLoading',
      'hideLoading'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list__header {
  padding: 10px;
  font-weight: bold;
}
.list__header.list__header--material {
  padding: 20px 0 0 15px;
}
.btn-register {
  margin-top: 30px;
  padding: 0 20px;
}
.btn-login {
  margin-top: 30px;
  padding: 0 20px;
  text-align: center;
  font-size: 15px;
}
</style>
