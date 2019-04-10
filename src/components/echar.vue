<template>
  <div>
    <div class="echar" style="height:500px;width:100%"></div>
    <!--<div :style="ss">{{ss}}</div>-->
    <div v-for="item in data">
      <div class="img"></div>
    </div>
    <canvas class="qrcode"></canvas>
    <input class="input" type="text" placeholder="输入内容" value="">
    <button @click="qqq">生成二维码</button>
    <button @click="shuaxin">点击刷新</button>
    <slot name="button"></slot>
    <slot name="bt"></slot>
  </div>
</template>

<script>
import echar from '../echar';

export default {
  inject: ['reload'],
  name: 'echar',
  props: ['aaa', 'ss', 'data'],
  data() {
    return {
      aa: '',
      fff: 1,
    };
  },
  methods: {
    qqq() {
      this.qrcode();
    },
    shuaxin() {
      this.reload();
    },
    qrcode() {
      const qrcode = document.querySelector('.qrcode');
      const input = document.querySelector('.input');
      const url = input.value;
      console.log(url);
      this.$qrcode.toCanvas(qrcode, url, (error) => {
        if (error) console.log(error, { info: '错误' });
        console.log('qrcode success');
      });
    },

  },
  computed: {
    hehe() {
      return this.$store.state.count;
    },
  },
  watch: {

  },
  mounted() {
    // this.qrcode();
    // new Promise((resolve, reject) => {
    //   this.$axios.get('/api').then((res) => {
    //     this.data = res.data.subjects[4].casts[0].avatars;
    //     resolve(this.data);
    //   });
    // });

    const aa = echar.init(document.querySelector('.echar'));
    aa.setOption({
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', `${this.$store.state.count}`, '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    });
  },
};
</script>

<style scoped>
.img{
  width: 300px;
  height: 300px;
  background-size: cover;
  background-image: url("../assets/logo.png");
}
  .qrcode{
    width: 100px;
    height: 100px;
  }
</style>
