<template>
	<a-row class="top">
		<a-col class="default-padding" :span="24">
			<div class="top-title">本年度全市1/M情况</div>
		</a-col>
	</a-row>
	<a-row class="center">
		<a-col class="default-padding" :span="6">
			<div class="center-left-top">
				<div class="simple-header">全市维修行业企业基本情况</div>
			</div>
			<div class="center-left-bottom">
				<div class="simple-header">全市维修备案及电子档案接入情况</div>
			</div>
		</a-col>
		<a-col class="default-padding" :span="12">
			<Map />
		</a-col>
		<a-col class="default-padding" :span="6">
			<div class="center-right-top">
				<div class="simple-header">全市维修业务情况</div>
			</div>
			<div class="position-rel center-right-bottom">
				<div class="simple-header">本年度全市1/M情况</div>
			</div>
		</a-col>
	</a-row>
	<a-row class="bottom">
		<a-col class="default-padding health-border" :span="6">
			<div class="simple-header">本年度各区电子档案对接情況</div>
		</a-col>
		<a-col class="default-padding" :span="12">
			<div class="simple-header">本年度全市二维情況</div>
		</a-col>
		<a-col class="default-padding" :span="6">
			<div class="simple-header">本年度全市综检情况</div>
		</a-col>
	</a-row>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleClick = (value: string) => {
	router.push({ name: value })
}
</script>

<style lang="scss" scoped>
.top {
	height: 72px;
	width: 100%;
}
.top-title {
	height: 100%;
	font-size: 32px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
}
.center {
	height: calc(67% - 72px);
}
.center-left{
  &-top{
    height: calc(50% - 4px);
    border: 1px solid rgb(84, 150, 178);
    margin-bottom: 8px;
  }
  &-bottom{
    height: calc(50% - 4px);
    border: 1px solid rgb(84, 150, 178);
    .dashbord-show{
      height: calc(100% - 32px);
      &-dashboard{
        height: 100%;
      }
    }
  }
}
.center-right{
  &-top{
    height: calc(50% - 4px);
    border: 1px solid rgb(84, 150, 178);
    margin-bottom: 8px;
  }
  &-bottom{
    height: calc(50% - 4px);
    border: 1px solid rgb(84, 150, 178);
  }
}
.bottom {
	height: 33%;
}
.position-right{
  position: absolute;
  right: 0;
  top: 0;
}
.default-padding {
  padding: 8px;
  box-sizing: border-box;
}
.simple-header {
	width: 60%;
	margin: 0 auto;
	font-size: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	height: 32px;
	justify-content: center;
	font-weight: bold;
	background-image: linear-gradient(to right, transparent, rgb(84, 150, 178), rgb(84, 150, 178), transparent);
}
</style>
