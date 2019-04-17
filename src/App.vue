<template>
  <div>
    <router-view v-if="show"></router-view>
    <slot></slot>
  </div>
</template>
<script>
// window.onload = function () {
//   console.log(123)
//   console.log(document.querySelector('.yang').clientWidth);
//   console.log(document.querySelector('.yang').offsetWidth);
// };
window.onresize = window.onorientationchange = function () {
  console.log(document.querySelector('.yang').clientWidth);
  console.log(document.querySelector('.yang').offsetWidth);
};
export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.$filter();
  },

  watch: {
    $route(to, from) {
      console.log(to); // to表示去往的界面
      console.log(from); // from表示来自于哪个界面
      if (to.path === '/hh') {
        console.log('实验页面');
      }
    },
    count() {
      console.log(123);
    },
  },
  reload() {
    this.show = false;
    this.$nextTick(function () {
      this.show = true;
    });
  },

};
</script>
<style lang="scss">
@import "global";

</style>
