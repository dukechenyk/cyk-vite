import { createApp } from "vue";
import router from "@/router";
import echarts from '@/utils/echarts';
import "./font/fonts.scss";
import App from "@/App.vue";
import 'amfe-flexible'

const app = createApp(App);

app.config.globalProperties.$echarts = echarts

app.use(router);
app.mount("#app");
