<template>
  <div id="main"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue"; // 主要

  onMounted(() => {
    change();
  });

let echarts:any = inject("echarts"); // 主要
  // 基本柱形图
  const change = () => {
    const chartBox = echarts.init(document.getElementById("main")); // 主要
    const option = {
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [23, 24, 18, 25, 27, 28, 25],
        },
      ],
    };
    chartBox.setOption(option);
    // 根据页面大小自动响应图表大小
    window.addEventListener("resize", function () {
      chartBox.resize();
    });
  };
</script>

<style scoped>

</style>