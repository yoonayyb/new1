<!--<template>-->
 <!--<div class="home">-->
   <!--<button @click="jq">jq跨域</button>-->
   <!--<button class="button" :class="{disbutton:!active}" @click="dianji">{{neirong}}</button>-->
   <!--<button @click="aaaa">dianjiwo</button>-->
   <!--<h3>用鼠标拖动小方块<span id="msg">0</span>%</h3>-->
   <!--<div id="lineDiv" class="lineDiv">-->
     <!--<div id="minDiv" class="minDiv">-->
       <!--<div id="vals" class="vals">0</div>-->
     <!--</div>-->
   <!--</div>-->
   <!--&lt;!&ndash;<div class="a" :style="aa" @touchmove="ontouchmove" @touchstart="ontouchstart" @touchend="ontouchend"></div>&ndash;&gt;-->
   <!--<v-touch @swipeleft="left"  v-on:panmove="callback" :style="aa" v-on:panstart="ontouchstart" class="a"></v-touch>-->
 <!--</div>-->

<!--</template>-->

<!--<script>-->
<!--import { mapGetters, mapState } from 'vuex';-->
<!--import store from '../store';-->

<!--window.onload = function () {-->
  <!--const lineDiv = document.getElementById('lineDiv'); // 长线条-->

  <!--const minDiv = document.getElementById('minDiv'); // 小方块-->
  <!--const msg = document.getElementById('msg');-->
  <!--const vals = document.getElementById('vals');-->
  <!--let ifBool = false; // 判断鼠标是否按下-->

  <!--// 鼠标按下方块-->
  <!--minDiv.addEventListener('touchstart', (e) => {-->
    <!--e.stopPropagation();-->
    <!--ifBool = true;-->
    <!--console.log('鼠标按下');-->
  <!--});-->

  <!--// 拖动-->
  <!--minDiv.addEventListener('touchmove', (e) => {-->
    <!--console.log('鼠标拖动');-->
    <!--if (ifBool) {-->
      <!--const x = e.touches[0].pageX; // 鼠标横坐标var x-->
      <!--console.log(x);-->
      <!--const lineDiv_left = getPosition(lineDiv).left; // 长线条的横坐标-->
      <!--console.log(lineDiv_left);-->
      <!--let minDiv_left = x - lineDiv_left; // 小方块相对于父元素（长线条）的left值-->
      <!--if (minDiv_left >= lineDiv.offsetWidth - 15) {-->
        <!--minDiv_left = lineDiv.offsetWidth - 15;-->
      <!--}-->
      <!--if (minDiv_left < 0) {-->
        <!--minDiv_left = 0;-->
      <!--}-->
      <!--minDiv.style.left = `${minDiv_left}px`;-->

      <!--msg.innerText = parseInt((minDiv_left / (lineDiv.offsetWidth - 15)) * 100);-->
      <!--vals.innerText = parseInt((minDiv_left / (lineDiv.offsetWidth - 15)) * 100);-->
    <!--}-->
  <!--});-->
  <!--// 鼠标松开-->
  <!--minDiv.addEventListener('touchend', (e) => {-->
    <!--console.log('鼠标弹起');-->
    <!--ifBool = false;-->
  <!--});-->
  <!--// 获取元素的绝对位置-->
  <!--function getPosition(node) {-->
    <!--let left = node.offsetLeft; // 获取元素相对于其父元素的left值var left-->
    <!--let top = node.offsetTop;-->
    <!--let current = node.offsetParent; // 取得元素的offsetParent-->
    <!--// 一直循环直到根元素-->

    <!--while (current != null) {-->
      <!--left += current.offsetLeft;-->
      <!--top += current.offsetTop;-->
      <!--current = current.offsetParent;-->
    <!--}-->
    <!--return {-->
      <!--left,-->
      <!--top,-->
    <!--};-->
  <!--}-->
<!--};-->
<!--export default {-->
  <!--name: 'hezi',-->
  <!--data() {-->
    <!--return {-->
      <!--aa: '999',-->
      <!--starx: '',-->
      <!--stary: '',-->
      <!--x: '',-->
      <!--y: '',-->
      <!--neirong: '发送验证码',-->
      <!--active: true,-->
      <!--counts: 10,-->
      <!--yunxu: true,-->
    <!--};-->
  <!--},-->
  <!--computed: {-->
    <!--count() {-->
      <!--return this.$store.state.count;-->
    <!--},-->

  <!--},-->
  <!--mounted() {-->
    <!--console.log(this.$route.params);-->
    <!--this.dingshi();-->
    <!--// this.$axios('/api')-->
    <!--//   .then((res) => {-->
    <!--//     console.log(res, '成功');-->
    <!--//   })-->
    <!--//   .catch((err) => {-->
    <!--//     console.log(err);-->
    <!--//   });-->
    <!--// this.$axios('/xinlang')-->
    <!--//   .then((res) => {-->
    <!--//     console.log(res, '新浪');-->
    <!--//   })-->
    <!--//   .catch((err) => {-->
    <!--//     console.log(err);-->
    <!--//   });-->
  <!--},-->
  <!--// computed: mapState({-->
  <!--//   count: state => state.count,-->
  <!--//   countAlias: 'count',-->
  <!--// }),-->
  <!--// computed: mapGetters([-->
  <!--//   'shiyan',-->
  <!--// ]),-->
  <!--beforeRouteLeave(to, from, next) {-->
    <!--alert('是否跳转过去');-->
    <!--next();-->
  <!--},-->
  <!--methods: {-->
    <!--jq() {-->
      <!--// $.ajax({-->
      <!--//   url: 'http://api.douban.com/v2/movie/top250',-->
      <!--//   type: 'GET',-->
      <!--//   dataType: 'jsonp',-->
      <!--//   jsonpCallback: 'showData',-->
      <!--//   success(res) {-->
      <!--//     console.log(res);-->
      <!--//   },-->
      <!--// });-->
    <!--},-->
    <!--dianji() {-->
      <!--if (!this.yunxu) {-->
        <!--return false;-->
      <!--}-->
      <!--this.yunxu = false;-->
      <!--this.active = false;-->
      <!--this.neirong = `${this.counts}s重新发送`;-->
      <!--const aa = setInterval(() => {-->
        <!--this.counts&#45;&#45;;-->
        <!--this.neirong = `${this.counts}s重新发送`;-->
        <!--if (this.counts === 0) {-->
          <!--clearInterval(aa);-->
          <!--console.log('停止计时');-->
          <!--this.active = true;-->
          <!--this.neirong = '重新发送';-->
          <!--this.counts = 10;-->
          <!--this.yunxu = true;-->
        <!--}-->
      <!--}, 1000);-->
    <!--},-->
    <!--dingshi() {-->
      <!--const a = setInterval(() => {-->
        <!--this.$store.state.count++;-->
        <!--if (this.$store.state.count >= 150) {-->
          <!--clearInterval(a);-->
          <!--console.log('停止');-->
        <!--}-->
      <!--}, 200);-->
    <!--},-->
    <!--aaaa() {-->
      <!--this.$router.push({ name: 'home', params: { a: 123456 } });-->
      <!--this.$store.commit('nnn', this.aa);-->
      <!--console.log(this.$store.state.ss);-->
    <!--},-->
    <!--callback(e) {-->
      <!--const home = document.querySelector('.home');-->
      <!--const a = document.querySelector('.a');-->
      <!--const x = e.changedPointers[0].pageX; // 鼠标横坐标var x-->
      <!--const y = e.changedPointers[0].pageY; // 鼠标横坐标var x-->
      <!--// const lineDiv_left = getPosition(home).left; // 长线条的横坐标-->
      <!--// let minDiv_left = x - lineDiv_left; // 小方块相对于父元素（长线条）的left值-->
      <!--// if (minDiv_left >= lineDiv.offsetWidth - 15) {-->
      <!--//   minDiv_left = lineDiv.offsetWidth - 15;-->
      <!--// }-->
      <!--// if (minDiv_left < 0) {-->
      <!--//   minDiv_left = 0;-->
      <!--// }-->
      <!--// 设置拖动后小方块的left值-->
      <!--a.style.left = `${x}px`;-->

      <!--// msg.innerText = parseInt((minDiv_left / (lineDiv.offsetWidth - 15)) * 100);-->
      <!--// vals.innerText = parseInt((minDiv_left / (lineDiv.offsetWidth - 15)) * 100);-->
    <!--},-->
    <!--left(e) {-->
      <!--console.log(123456);-->
    <!--},-->
    <!--ontouchstart(e) {-->
      <!--this.starx = e.changedPointers[0].offsetX;-->
      <!--this.stary = e.changedPointers[0].offsetY;-->
    <!--},-->
    <!--ontouchmove(e) {-->
      <!--console.log(e.changedTouches[0]);-->
      <!--this.x = e.changedTouches[0].screenX - this.starx;-->
      <!--this.y = e.changedTouches[0].screenY - this.stary;-->
      <!--console.log(this.x, this.y);-->
      <!--this.aa = `left:${this.x};top:${this.y}`;-->
    <!--},-->
    <!--ontouchend(e) {-->
      <!--console.log(e.changedTouches[0].screenX);-->
      <!--this.aa = `transform:translate(${this.x}px,${this.y}px)`;-->
    <!--},-->
  <!--},-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->

  <!--.button{-->
    <!--width: 100px;-->
    <!--height: 50px;-->
    <!--background:none;-->
    <!--outline:none;-->
    <!--border:0px;-->
    <!--background: aqua;-->
    <!--border-radius: 10px;-->
    <!--color: chocolate;-->
    <!--font-size: 15px;-->
  <!--}-->
  <!--.disbutton {-->
    <!--width: 100px;-->
    <!--height: 50px;-->
    <!--background:none;-->
    <!--outline:none;-->
    <!--border:0px;-->
    <!--border-radius: 10px;-->
    <!--background: #ddd;-->
    <!--color: chocolate;-->
    <!--border-color: #ddd;-->
  <!--}-->

  <!--.lineDiv {-->
    <!--position: relative;-->
    <!--height: 5px;-->
    <!--background: red;-->
    <!--width: 300px;-->
    <!--margin: 50px auto;-->
  <!--}-->

  <!--.lineDiv .minDiv {-->
    <!--position: absolute;-->
    <!--top: -5px;-->
    <!--left: 0;-->
    <!--width: 15px;-->
    <!--height: 15px;-->
    <!--background: green;-->
    <!--cursor: pointer-->
  <!--}-->

  <!--.lineDiv .minDiv .vals {-->
    <!--position: absolute;-->
    <!--font-size: 20px;-->
    <!--top: -45px;-->
    <!--left: -10px;-->
    <!--width: 35px;-->
    <!--height: 35px;-->
    <!--line-height: 35px;-->
    <!--text-align: center;-->
    <!--background: blue;-->
  <!--}-->

  <!--.lineDiv .minDiv .vals:after {-->
    <!--content: "";-->
    <!--width: 0px;-->

    <!--border-top: 6px solid blue;-->
    <!--border-left: 6px solid transparent;-->
    <!--border-right: 6px solid transparent;-->
    <!--border-bottom: 6px solid transparent;-->
    <!--display: block;-->
    <!--margin-left: 11px;-->
  <!--}-->
<!--.home{-->
  <!--position: relative;-->
  <!--width: 100%;-->
  <!--height: 100%;-->
  <!--border: 1px solid #000;-->
<!--}-->
  <!--.a{-->
    <!--position: relative;-->
    <!--display: inline-block;-->
    <!--width: 20px;-->
    <!--height: 20px;-->
    <!--border-radius: 50%;-->
    <!--background: aquamarine;-->
  <!--}-->
<!--</style>-->
