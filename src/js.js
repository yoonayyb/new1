export const a = 2;
export const ddd = 963;
export const dd = { a: 123, c: 555 };
export function f(a) {
  // const xhr = new XMLHttpRequest();
  // xhr.open('GET', 'http://www.baidu.com', true);
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     console.log(xhr.response);
  //   }
  // };
  // xhr.send();
  // const script = document.createElement('script');
  // script.type = 'text/javascript';
  // const src = document.getElementById('word').value;
  // script.src = 'http://www.douyu.com';
  // document.head.appendChild(script);
  return a * a;
}
function abc(re) {
  console.log(re);
}
export let counter = 3;
export function incCounter() {
  counter++;
}
const o = 123;
const d = 999;
function f1(x) {
  console.log(x);
}
export default {
  o,
  d,
  f1,
};
// module.exports = {
//   proxy: {
//     '/apis': { // 将www.exaple.com印射为/apis
//       target: 'https://www.baidu.com', // 接口域名
//       secure: false, // 如果是https接口，需要配置这个参数
//       changeOrigin: true, // 是否跨域
//       pathRewrite: {
//         '^/apis': '', // 需要rewrite的,
//       },
//     },
//   },
// };
