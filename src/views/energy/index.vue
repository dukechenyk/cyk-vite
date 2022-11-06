<template>
	<a-row class="top">
		<a-col :span="24">
			<div class="top-title">本年度全市1/M情况</div>
		</a-col>
	</a-row>
	<a-row class="center">
		<a-col :span="9">
			<div class="center-left-top">
				<div class="simple-header">全市维修行业企业基本情况</div>
				<Bar />
			</div>
			<div class="center-left-bottom">
				<div class="simple-header">全市维修备案及电子档案接入情况</div>
				<a-row class="dashbord-show">
					<a-col class="dashbord-show-dashboard" :span="12">
						<Dasbord :dashbord-id="'left'" :name-title="'维修备案率'" :title-left="37" /> 
					</a-col>
					<a-col class="dashbord-show-dashboard" :span="12">
						<Dasbord :dashbord-id="'right'" :name-title="'电子健康档案\n接入率'" :title-left="35" />
          </a-col>
				</a-row>
			</div>
		</a-col>
		<a-col :span="6">
			<div class="simple-header">全市维修企业分布情況</div>
			<Map />
		</a-col>
		<a-col :span="9">
			<div class="center-right-top">
				<div class="simple-header">全市维修业务情况</div>
				<Line />
			</div>
			<div class="position-rel center-right-bottom">
				<div class="simple-header">本年度全市1/M情况</div>
				<a-button type="link" class="position-right" @click="handleClick('health')">查看</a-button>
			</div>
		</a-col>
	</a-row>
	<a-row class="bottom">
		<a-col :span="9" class="position-rel">
			<div class="simple-header">本年度各区电子档案对接情況</div>
			<a-button type="link" class="position-right" @click="handleClick('energy')">查看</a-button>
		</a-col>
		<a-col :span="6" class="position-rel">
			<div class="simple-header">本年度全市二维情況</div>
			<a-button type="link" class="position-right" @click="handleClick('performance')">查看</a-button>
		</a-col>
		<a-col :span="9" class="position-rel">
			<div class="simple-header">本年度全市综检情况</div>
			<a-button type="link" class="position-right" @click="handleClick('synthesize')">查看</a-button>
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
	height: calc(75% - 72px);
}
.center-left{
  &-top{
    height: 65%;
  }
  &-bottom{
    height: 35%;
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
    height: 65%;
  }
  &-bottom{
    height: 35%;
  }
}
.bottom {
	height: 25%;
}
.position-rel {
	position: relative;
}
.position-right{
  position: absolute;
  right: 0;
  top: 0;
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
