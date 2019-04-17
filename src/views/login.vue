<template>
    <div class="home">
        <div class="box">
          <el-input ref="login" v-model="input" placeholder="请输入账号"></el-input>
          <el-input ref="pwd" class="pwd" placeholder="请输入密码" v-model="input1" show-password></el-input>
          <div class="box2">
          <el-button type="primary" round @click="fn">登陆</el-button>
          <el-button type="primary" round @click="">注册</el-button>
          </div>
        </div>
      <div class="yang"></div>
      <router-view :key="key"></router-view>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      input: '',
      input1: '',
    };
  },
  mounted() {
    this.key();
    console.log(this.key());
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date();
    },
    ...mapGetters(['aa', 'bb']),
    ...mapState(['login', 'pwd', 'ss']),
  },
  methods: {
    async fn() {
      console.log(123);
      if (this.$refs.login.value && this.$refs.pwd.value) {
        const login = this.$refs.login.value;
        const pwd = this.$refs.pwd.value;
        window.localStorage.setItem('login', login);
        window.localStorage.setItem('pwd', pwd);
        await this.$store.dispatch('local', { login: window.localStorage.getItem('login'), pwd: window.localStorage.getItem('pwd') });
      } else {
        await this.$store.dispatch('local', { login: window.localStorage.getItem('login'), pwd: window.localStorage.getItem('pwd') });
      }


      console.log(this.aa);
      console.log(this.bb);
      console.log(this.login);
      console.log(this.pwd);
      console.log(this.ss);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../global.scss";
.home{
  width: 100%;
  height: 100%;
}
  .box{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background: #8D8D8D;
    width: 400px;
    height: 300px;
    margin: 150px auto;
  }
  .box2{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
   .el-input{
     margin: 50px 40px;
     width: 60%;
   }
  .pwd{
    margin: 0 40px;
    width: 60%;
  }
</style>
