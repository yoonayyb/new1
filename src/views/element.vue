<template>
<div class="home">
  <Carousel></Carousel>
  <button @click="dd">dianjiwo</button>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import Carousel from '../components/Carousel';

export default {
  name: 'element',
  components: {
    Carousel,
  },
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: '',
    };
  },
  methods: {
    ...mapMutations({

      aaa: 'aaaa',
    }),
    ...mapActions([
      'haha',
    ]),
    dd() {
      console.log(this.$route);
      console.log(this.$el.textContent);
      this.$store.commit('a/do');
      // console.log(this.$store.getters['a/oo']);
      // console.log(this.$store.getters.oo);
      // console.log(this.$store.state.a.uu);
    },
    aa(e) {
      if (e.currentTarget.className === 'el-button el-button--default') {
        console.log(999);
      }
      const aa = document.querySelector('.el-button');
      const dd = aa.className;
      if (aa.className === 'el-button el-button--default') {

      }
    },
  },
};
</script>

<style scoped>
  >>>.el-carousel__item:nth-child(2n) {
    background-color: red;
  }
  .aa{
    margin-top: 200px;
  }
  >>>.el-input__inner{
    height: 100px;
    height: 10px !important;
  }
  .aa input{
    height: 100px !important;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}

.el-aside {
  width:500px;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 100%;
  margin: 0;
}

body > .el-container {
  margin-bottom: 40px;
  width: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
