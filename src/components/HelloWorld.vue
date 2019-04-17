<template>
  <div class="hello">
    <div @click="fn">{{msg}}</div>
    <button @click="emit">99999</button>
    <button @click="fn">8888</button>
    <div id="myChart" ref="myChart"></div>
    <div>
  <slot name="aa"></slot>
</div>
  </div>
</template>

<script>
import { aa, dd } from '../js';
import echaraaa from '../echar';


export default {
  name: 'HelloWorld',
  props: ['msg'],
  data() {
    return {

    };
  },
  methods: {
    fn() {
      console.log(666);
      console.log(dd);
      console.log(aa);
    },
    emit() {
      this.$emit('cc', this.msg);
    },
  },
  mounted() {
    const myChart = echaraaa.init(this.$refs.myChart);

    // 绘制条形图
    myChart.setOption({
      title: {
        text: '树图',
        subtext: '虚构数据',
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: false,

      series: [
        {
          name: '树图',
          type: 'tree',
          orient: 'vertical', // vertical horizontal
          rootLocation: { x: 'center', y: 50 }, // 根节点位置  {x: 100, y: 'center'}
          nodePadding: 1,
          itemStyle: {
            normal: {
              label: {
                show: false,
                formatter: '{b}',
              },
              lineStyle: {
                color: '#48b',
                shadowColor: '#000',
                shadowBlur: 3,
                shadowOffsetX: 3,
                shadowOffsetY: 5,
                type: 'curve', // 'curve'|'broken'|'solid'|'dotted'|'dashed'

              },
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },

          data: [
            {
              name: '根节点',
              value: 6,
              children: [
                {
                  name: '节点1',
                  value: 4,
                  children: [
                    {
                      name: '叶子节点1',
                      value: 4,
                    },
                    {
                      name: '叶子节点2',
                      value: 4,
                    },
                    {
                      name: '叶子节点3',
                      value: 2,
                    },
                    {
                      name: '叶子节点4',
                      value: 2,
                    },
                    {
                      name: '叶子节点5',
                      value: 2,
                    },
                    {
                      name: '叶子节点6',
                      value: 4,
                    },
                  ],
                },
                {
                  name: '节点2',
                  value: 4,
                  children: [{
                    name: '叶子节点7',
                    value: 4,
                  },
                  {
                    name: '叶子节点8',
                    value: 4,
                  }],
                },
                {
                  name: '节点3',
                  value: 1,
                  children: [
                    {
                      name: '叶子节点9',
                      value: 4,
                    },
                    {
                      name: '叶子节点10',
                      value: 4,
                    },
                    {
                      name: '叶子节点11',
                      value: 2,
                    },
                    {
                      name: '叶子节点12',
                      value: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#myChart {
  width: 100%;
  height: 90%;
  border: 1px solid #CCC;
}
  .hello{
    width: 100%;
    height: 100%;
  }
</style>
