import Vue from 'vue';
import VueTouch from 'vue-touch';
import Axios from 'axios';
import QRCode from 'qrcode';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification,
} from 'element-ui';
import layui from './static/layui/css/layui.css';
import App from './App.vue';
import router from './router';
import store from './store';
import aa from './filter';

Vue.use(aa);
Vue.use(layui);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

// const echarts = require('echarts/lib/echarts');

// // 引入折线图等组件
// require('echarts/lib/chart/line');
// require('echarts/lib/chart/bar');
// require('echarts/lib/chart/radar');
//
// // 引入提示框和title组件，图例
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/component/legend');
// require('echarts/lib/component/legendScroll');// 图例翻译滚动
//
// Vue.prototype.$echarts = echarts;
Vue.prototype.$qrcode = QRCode;
Vue.prototype.$axios = Axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}),
Axios.interceptors.request.use((config) => {
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
  };
  return config;
}),
Axios.interceptors.response.use((response) => {
  if (response) {
    console.log(response);
  }
});
Vue.use(VueTouch, { name: 'v-touch' });
Vue.config.productionTip = false;
function onDeviceReady() {
  alert('设备已经ok');
  console.log(9999);
  new Vue({
    router,
    store,
    render: h => h(App),
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
  }).$mount('#app');
  console.log(123456);
}

if (window.location.protocol === 'file:') {
  // 在cordova的项目中  我们希望在 deviceready 之后再创建实例Vue
  document.addEventListener('deviceready', onDeviceReady);
} else {
  console.log(1111);
  const a = new Vue({
    router,
    store,
    render: h => h(App),
    // watch: {
    //   $route(to, from) {
    //     console.log(to); // to表示去往的界面
    //     console.log(from); // from表示来自于哪个界面
    //     if (to.path === '/hh') {
    //       console.log('实验页面');
    //     }
    //   },
    //   count() {
    //     console.log(123);
    //   },
    // },
  }).$mount('#app');
  console.log(a);
}
// router.beforeEach((to, from, next) => {
//   // 根据字段判断是否路由过滤
//   if (to.matched.some(record => record.meta.auth)) {
//     console.log('数组返回true');
//     if (window.localStorage.getItem('login') && window.localStorage.getItem('pwd')) {
//       store.dispatch('local', { login: window.localStorage.getItem('login'), pwd: window.localStorage.getItem('pwd') });
//       next();
//     } else {
//       // 防止无限循环
//       if (to.name === 'login') {
//         next();
//         return;
//       }
//       next({
//         path: '/login',
//       });
//     }
//   } else {
//     console.log('正常跳转');
//     next();// 若点击的是不需要验证的页面,则进行正常的路由跳转
//   }
// });
