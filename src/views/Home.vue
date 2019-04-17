<template>
  <div class="home">
    <div v-show="show">
    <button @click="fn">dianjiwo</button>
    <el-button style="color: #E6A23C" type="primary" icon="el-icon-search">主要按钮</el-button>
    <i class="el-icon-edit"></i>
    <achar :aaa="$store.state.count" :ss="ss" :data="data">
      <button slot="button">9999999</button>
      <div slot="button">9999999</div>
    </achar>
    <!--<H :msg="aa">-->
       <!--<div :slot="aaa"></div>-->

    <!--</H>-->
    <!--<button @click="fn">hhaaha{{aa}}</button>-->
    <H ref="zujian"  :msg="aa" @cc="fn" >
    </H>
    <!--<button style="width: 100px;height: 100px;border: 1px solid #000;" @click="fn"></button>-->
    <button @click="fn">dianjiwo</button>
    <div class="yang" >
      <h2>撒大声地</h2>
    </div>
  <dda></dda>
      <add></add>
  <layui></layui>
    <div @click="push">跳转</div>
    </div>
    <router-view v-show="!show"></router-view>
    <div ref="yang" class="yang"></div>
    <div class="ooo" style="font-size: 12px">撒大声地</div>
    <button @click="dianji">css</button>
  </div>
</template>

<script>
// @ is an alias to /src
import H from '@/components/HelloWorld.vue';
import achar from '@/components/echar.vue';
import layui from '../components/layui.vue';
import dda from './element.vue';
import add from '../components/Carousel';
// import { a, dd, f } from '../js';
const a = 999;

for (let i = 0; i < 10; i++) {
  console.log(i);
}
const x = 2;
// console.log(x.valueOf().toString());

console.log([1] === [1]);
console.log(this);
export default {
  name: 'home',
  inject: ['reload'],
  components: {
    H,
    achar,
    layui,
    dda,
    add,
  },
  beforeRouteEnter(to, from, next) {
    console.log('子路由不更新');
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('子路由更新');
    this.show = true;
    next();
  },
  // beforeRouteLeave(to, from, next) {
  //   if (!this.$store.state.login && !this.$store.state.pwd) {
  //     console.log('没有账号密码');
  //   } else {
  //     console.log('已经有账号密码');
  //   }
  // },
  data() {
    return {
      aa: 1,
      aaa: 0,
      ss: 'height:100px;width:100px;border:solid red',
      dd: '',
      oo: [1, 5, 3, 4, 6, 99, 23, 45],
      timer: [],
      data: '',
      show: true,
    };
  },
  mounted() {
    console.log(this);
    // this.gg();
  //   this.$router.push({ params: { aaa: 123 } });
  //   console.log(aa);
  //   console.log(dd);
  //   console.log(f(4));
  //
  //   dd.newname = 'yang';
  //   console.log(a);
  //   console.log(dd);
    // this.sss();
    // this.qq();
  },
  methods: {
    push() {
      this.$router.push({ path: '/home/a' });
      this.show = false;
    },
    dianji() {
      import('../js').then((res) => {
        console.log(res.f(4));
        console.log(res.counter);
        res.incCounter();
        console.log(res.counter);
        console.log(res.default.o);
        res.default.f1(1000);
      });
      const a = document.querySelector('.yang');
      a.style.background = 'black';
      // this.$refs.yang.style.display = 'block';
      this.$refs.yang.style.background = 'black';
    },
    qq() {
      this.$axios.get('/api').then((res) => {
        this.data = res.data.subjects[4].casts[0].avatars;
      });
    },
    sss() {
      this.timer[0] = setInterval((res) => {
        const aa = this.ss.match(/\d{3,}/);

        if (aa >= 1000) {
          this.dd = parseInt(aa) + 200;
          const gg = this.ss.replace(aa, this.dd);
          this.ss = gg;
        } else {
          this.dd = parseInt(aa) + 100;
          const gg = this.ss.replace(aa, this.dd);
          this.ss = gg;
        }
        if (aa > 500) {
          clearInterval(this.timer[0]);
          // clearInterval(this.timer[1]);
        }
      }, 1000);
    },
    gg() {
      this.timer[1] = setInterval((res) => {
        this.$store.dispatch('haha', this.oo[0]);
        this.oo.shift();
        console.log(this.oo);
        console.log(this.oo.length);
        if (this.oo.length === 1) {
          clearInterval(this.timer[1]);
        }
      }, 3000);

      // if (this.oo.length < 1) {
      //   clearInterval(this.timer[1]);
      // }
    },
    fn(e) {
      // 使用组件内的方法
      // this.$refs.zujian.fn();
      this.$router.replace({ path: '/about' });
      console.log(this.$store.state.login);
      console.log(this.$store.state.pwd);
      // if (this.aaa === 0) {
      //   this.aa = 'height:100px;width:100px;border: solid red';
      //   this.aaa = 1;
      // } else {
      //   this.aa = 'height:100px;width:100px;border: solid blue';
      //   this.aaa = 0;
      // }

      // this.aaa === 'hh' ? this.aaa = 'aa' : this.aaa = 'hh';
      // console.log(this.$store.state.ss);
      // console.log(this.$route.params);
    },
  },
};

</script>

<style scoped lang="scss">
@import "../global";

</style>
