<script lang="ts" setup>
  import * as echarts from "echarts";
  import { provide } from "vue";
  provide("echarts", echarts);
</script>
 
<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>
 
<style>
body {
  margin: 0px;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
.main{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: rgb(5,6,67);
}
</style>