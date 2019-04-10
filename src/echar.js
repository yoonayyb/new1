const echarts = require('echarts/lib/echarts');

// 引入折线图等组件
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/radar');
require('echarts/lib/chart/tree');

// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/legendScroll');// 图例翻译滚动

export default echarts;
