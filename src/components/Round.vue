<template>
  <div class="round-content">
    <div class="round-box">
      <div class="round-value">
        {{ props.value }}
      </div>
    </div>
    <div class="round-name">
      {{ props.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ value: { type: String }, name: { type: String } })
</script>

<style scoped>
.round-content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.round-box{
  width: 120px;
  height: 120px;
  position: relative;
  background-image: url('../assets/slices/square.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.round-value{
  font-size: 18px;
  font-family: AlibabaPuHuiTiH;
  font-weight: bold;
  font-style: italic;
  color: #CEDDEF;
  text-shadow: 2px 4px 24px rgba(181,254,245,0), 7px 14px 32px rgba(3,5,15,0.92);
  background: linear-gradient(-26deg,#FFFFFF, #9BFFF0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.round-name{
  margin-top: 16px;
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  font-style: italic;
  color: #EDF6FF;
  line-height: 18px;
  text-shadow: 16px 32px 35px rgba(0,0,0,0.06);
  background: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>