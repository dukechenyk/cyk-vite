<template>
  <div class="projection-content">
    <div class="projection-valuename">
      <div class="projection-value">
        {{props.value}}
      </div>
      <div class="projection-name">
        {{props.name}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ value: { type: String }, name: { type: String } })
</script>

<style scoped>
.projection-content{
  width: 150px;
  height: 132px;
  position: relative;
  background-image: url('../assets/slices/423x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.projection-valuename{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-end;
}
.projection-value{
  font-size: 26px;
  font-family: AlibabaPuHuiTiH;
  font-weight: bold;
  font-style: italic;
  color: #CEDDEF;
  text-shadow: 2px 4px 24px rgba(181,254,245,0), 7px 14px 32px rgba(3,5,15,0.29);
  background: linear-gradient(-26deg, #FFFFFF, #9BFFF0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.projection-name{
  font-size: 15px;
  font-family: AlibabaPuHuiTiM;
  font-weight: 400;
  font-style: italic;
  color: #EDF6FF;
  text-shadow: 16px 32px 35px rgba(0,0,0,0.06);
  background: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>