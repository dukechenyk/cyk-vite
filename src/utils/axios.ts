/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
 import axios, { AxiosInstance } from 'axios';
 import router from '@/router/index';
 import { serialize } from './util';
 import {message} from 'ant-design-vue'
 import { Base64 } from 'js-base64';
 import NProgress from 'nprogress';
 import 'nprogress/nprogress.css';
 
 //默认超时时间
 axios.defaults.timeout = 10000;
 //返回其他状态码
 axios.defaults.validateStatus = function (status) {
   return status >= 200 && status <= 500;
 };
 //跨域请求，允许保存cookie
 axios.defaults.withCredentials = true;
 // NProgress 配置
 NProgress.configure({
   showSpinner: false,
 });
 //http request拦截
 axios.interceptors.request.use(
   (config: any) => {
     //开启 progress bar
     NProgress.start();
     const meta = config.meta || {};
     config.headers['Authorization'] = `Basic ${Base64.encode('saber:saber_secret',)}`;
     config.headers['Accept-Language'] = 'zh';
     //让每个请求携带token
     //headers中配置text请求
     if (config.text === true) {
       config.headers['Content-Type'] = 'text/plain';
     }
     //headers中配置serialize为true开启序列化
     if (config.method === 'post' && meta.isSerialize === true) {
       config.data = serialize(config.data);
     }
     return config;
   },
   (error) => {
     return Promise.reject(error);
   },
 );
 //http response 拦截
 axios.interceptors.response.use(
   (res) => {
     //关闭 progress bar
     NProgress.done();
     //获取状态码
     const status = res.data.code || res.status;
     const statusWhiteList:any = [];
     const mesg = res.data.msg || res.data.error_description || '未知错误';
     //如果在白名单里则自行catch逻辑处理
     if (statusWhiteList.includes(status)) return Promise.reject(res);
     //如果是401则跳转到登录页面
     if (status === 401) router.push({ path: '/404' });
     // 如果请求为非200否者默认统一处理
     if (status !== 200) {
       if (res.data instanceof Blob) {
         const data = res.data;
         const reader = new FileReader();
         reader.readAsText(data, 'utf-8');
         reader.onload = function () {
           const d = JSON.parse(reader.result as string);
           message.error(d.msg);
         };
       } else {
         message.error(mesg);
       }
 
       return Promise.reject(new Error(mesg));
     }
     return res;
   },
   (error) => {
     NProgress.done();
     return Promise.reject(new Error(error));
   },
 );
 
 export default axios as AxiosInstance;
 