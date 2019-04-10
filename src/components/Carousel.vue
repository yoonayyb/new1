<template>
    <div>
      <template>
        <el-carousel @click.native="dd" @change="aa" :initial-index="1" height="500px" :interval="5000" trigger="click">
          <el-carousel-item name="9" v-for="item in 4" :key="item">
            <a href="http://www.baidu.com" label="aaaaa">123456</a>
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>

    </div>
</template>

<script>
export default {
  name: 'Carousel',
  methods: {
    dd(e) {
      window.location.href = 'http://www.baidu.com';
    },
    aa(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
