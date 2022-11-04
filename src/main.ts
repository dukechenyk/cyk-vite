import { createApp } from "vue";
import router from "@/router";
import echarts from '@/utils/echarts';
import App from "@/App.vue";

const app = createApp(App);

app.config.globalProperties.$echarts = echarts

app.use(router);
app.mount("#app");
