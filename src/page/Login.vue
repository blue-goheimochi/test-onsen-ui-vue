<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button :on-click="pop">Back</v-ons-back-button>
      </div>
      <div class="center"><slot>ログイン</slot></div>
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
      <div class="btn-login">
        <v-ons-button modifier="large" v-on:click="login">ログインする</v-ons-button>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  props: ['pageStack'],
  data: function () {
    return {
      loadingDialog: false
    }
  },
  methods: {
    pop: function () {
      this.pageStack.pop()
    },
    login: function () {
      this.showLoading()
      setTimeout(this.hideLoading, 2000)
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
.btn-login {
  margin-top: 30px;
  padding: 0 20px;
}
</style>
