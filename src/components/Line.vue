<template>
  <div id="maychar"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue"; // 主要
let echarts:any = inject("echarts"); // 主要
onMounted(() => {
  changetype();
})
// 折线图
const changetype = () => {
  // 获取组件实例
  const machart = echarts.init(document.getElementById("maychar"));
  // 设置配置项
  const option = {
    xAxis: {
      data: ["A", "B", "C", "D", "E"],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: "line",
        stack: "x",
      },
      {
        data: [5, 4, 3, 5, 10],
        type: "line",
        stack: "x",
      },
    ],
  };
  // 复制
  machart.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    machart.resize();
  });
};
</script>

<style scoped>

</style>