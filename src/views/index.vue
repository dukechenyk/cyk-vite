<template>
	<a-row class="top">
		<a-col :span="24">
			<div class="top-title">
				<div class="top-title-bg">无锡市维修行业数据平台</div>
			</div>
		</a-col>
	</a-row>
	<a-row class="center">
		<a-col :span="7">
			<div class="center-left-top">
				<div class="simple-header">全市维修行业企业基本情况</div>
				<div class="center-left-top-check">
					<div class="center-left-top-check-name">
						<div>全市机构企业总数</div>
						<div class="center-left-top-check-value-box">
							<div class="center-left-top-check-value">188</div>
							<div>家</div>
						</div>
					</div>
				</div>
				<div class="center-left-top-maintenance">
					<div class="center-left-top-maintenance-name">
						<div class="center-left-top-maintenance-title">
							二级维护企业
							<div class="center-left-top-maintenance-title-value">388</div>
							<div class="center-left-top-maintenance-title-jia">家</div>
						</div>
						<div class="center-left-top-maintenance-title">
							二级维护企业
							<div class="center-left-top-maintenance-title-value">588</div>
							<div class="center-left-top-maintenance-title-jia">家</div>
						</div>
					</div>
					<div class="center-left-top-maintenance-value-box">
						<div class="center-left-top-maintenance-value-name">
							<div class="center-left-top-maintenance-point"></div>
							一类资质企业总数
							<div class="center-left-top-maintenance-value">188</div>
							家
						</div>
						<div class="center-left-top-maintenance-value-name">
							<div class="center-left-top-maintenance-point"></div>
							二类资质企业总数
							<div class="center-left-top-maintenance-value">188</div>
							家
						</div>
						<div class="center-left-top-maintenance-value-name">
							<div class="center-left-top-maintenance-point"></div>
							三类资质企业总数
							<div class="center-left-top-maintenance-value">188</div>
							家
						</div>
						<div class="center-left-top-maintenance-value-name">
							<div class="center-left-top-maintenance-point"></div>
							其他资质企业总数
							<div class="center-left-top-maintenance-value">188</div>
							家
						</div>
					</div>
				</div>
			</div>
			<div class="center-left-bottom">
				<div class="simple-header">全市维修备案及电子档案接入情况</div>
				<a-row class="dashbord-show">
					<a-col class="dashbord-show-dashboard" :span="2"></a-col>
					<a-col class="dashbord-show-dashboard" :span="10">
						<Dasbord :dashbord-id="'left'" :name-title="'维修备案率'" :title-left="35" />
					</a-col>
					<a-col class="dashbord-show-dashboard" :span="10">
						<Dasbord :dashbord-id="'right'" :name-title="'电子健康档案\n接入率'" :title-left="32" />
					</a-col>
					<a-col class="dashbord-show-dashboard" :span="2"></a-col>
				</a-row>
			</div>
		</a-col>
		<a-col class="position-rel" :span="10">
			<div class="center-header">全市维修企业分布情況</div>
			<Map />
		</a-col>
		<a-col :span="7">
			<div class="center-right-top">
				<div class="simple-header">全市维修业务情况</div>
				<a-row class="center-right-top-brow">
					<a-col class="center-right-top-projecter" :span="12">
						<Projecter :value="'1222222'" :name="'3333'"></Projecter>
					</a-col>
					<a-col class="center-right-top-projecter" :span="12">
						<Projecter :value="'1222222'" :name="'3333'"></Projecter>
					</a-col>
					<a-col class="center-right-top-projecter" :span="12">
						<Projecter :value="'1222222'" :name="'3333'"></Projecter>
					</a-col>
					<a-col class="center-right-top-projecter" :span="12">
						<Projecter :value="'1222222'" :name="'3333'"></Projecter>
					</a-col>
				</a-row>
			</div>
			<div class="position-rel center-right-bottom">
				<div class="simple-header">本年度全市1/M情况</div>
				<a-button type="link" class="position-right" @click="handleClick('health')">查看 <img :src="getAssetsFile('arrow.png')" /> </a-button>
				<a-row class="center-right-bottom-data">
					<a-col class="center-right-bottom-numerical" :span="8">
						<Numerical numericalId="left"></Numerical>
					</a-col>
					<a-col class="center-right-bottom-numerical" :span="8">
						<Numerical numericalId="center"></Numerical>
					</a-col>
					<a-col class="center-right-bottom-numerical" :span="8">
						<Numerical numericalId="right"></Numerical>
					</a-col>
				</a-row>
			</div>
		</a-col>
	</a-row>
	<a-row class="bottom">
		<a-col :span="7" class="position-rel">
			<div class="simple-header">本年度各区电子档案对接情況</div>
			<a-button type="link" class="position-right" @click="handleClick('energy')">查看 <img :src="getAssetsFile('arrow.png')" /> </a-button>
			<div class="bottom-line-data">
				<Line :lineId="'index'" />
			</div>
		</a-col>
		<a-col :span="10" class="position-rel">
			<div class="another-header">本年度全市二维情況</div>
			<a-button type="link" class="position-right" @click="handleClick('performance')">查看 <img :src="getAssetsFile('arrow.png')" /> </a-button>
			<a-row class="bottom-data">
				<a-col class="bottom-numerical" :span="8">
					<Round :value="'1222222'" :name="'3333'"></Round>
				</a-col>
				<a-col class="bottom-numerical" :span="8">
					<Round :value="'1222222'" :name="'3333'"></Round>
				</a-col>
				<a-col class="bottom-numerical" :span="8">
					<Round :value="'1222222'" :name="'3333'"></Round>
				</a-col>
			</a-row>
		</a-col>
		<a-col :span="7" class="position-rel">
			<div class="simple-header">本年度全市综检情况</div>
			<a-button type="link" class="position-right" @click="handleClick('synthesize')">查看 <img :src="getAssetsFile('arrow.png')" /> </a-button>
			<a-row class="bottom-data">
				<a-col class="bottom-numerical" :span="8">
					<Projection :value="'1222222'" :name="'3333'"></Projection>
				</a-col>
				<a-col class="bottom-numerical" :span="8">
					<Projection :value="'1222222'" :name="'3333'"></Projection>
				</a-col>
				<a-col class="bottom-numerical" :span="8">
					<Projection :value="'1222222'" :name="'3333'"></Projection>
				</a-col>
			</a-row>
		</a-col>
	</a-row>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { getAssetsFile } from '@/utils/util'
const router = useRouter()

const handleClick = (value: string) => {
	router.push({ name: value })
}
</script>

<style lang="scss" scoped>
.top {
	height: 140px;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	background-image: url(../assets/slices/topTitle.png);
	background-repeat: no-repeat;
	background-size: cover;
}
.top-title {
	height: 100%;
	font-size: 32px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	font-weight: bold;
	font-family: Adobe Heiti Std;
	font-style: italic;
	padding-top: 12px;
}
.top-title-bg {
	text-shadow: 16px 32px 35px rgb(0 0 0 / 6%);
	background-image: linear-gradient(to bottom, #ffffff, #c9d7e9, #ffffff);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.center {
	height: calc(75% - 80px);
	margin-top: 86px;
}
.center-left {
	&-top {
		height: 65%;
		&-maintenance {
			height: calc(60% - 33px);
			width: 100%;
			background-image: url(../assets/slices/maintenance.png);
			background-repeat: no-repeat;
			background-size: 100% auto;
      &-title{
        font-size: 20px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        font-style: italic;
        color: #E0ECFF;
        display: flex;
        align-items: flex-end;
      }
      &-title-value{
        font-size: 26px;
        font-family: AlibabaPuHuiTiH;
        font-weight: 400;
        font-style: italic;
        color: #CEDDEF;
        line-height: 26px;
        background: linear-gradient(-26deg, #00D8FF 0%, #AFFFDC 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 0 9px 0 22px;
      }
      &-title-jia{
        font-size: 14px;
        font-family: AlibabaPuHuiTiR;
        font-weight: 400;
        font-style: italic;
        color: #E0ECFF;
      }
			&-name {
        height: 65%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: flex-start;
        padding-left: 42%;
			}
			&-value-box {
				display: flex;
				height: 35%;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				padding: 13px 11%;
			}
			&-point {
				width: 5px;
				height: 5px;
				border: 2px solid #00ff90;
				border-radius: 50%;
				margin-right: 16px;
			}
			&-value-name {
				width: 50%;
				font-size: 12px;
				font-family: AlibabaPuHuiTiR;
				font-weight: 400;
				font-style: italic;
				color: #e0ecff;
				display: flex;
				align-items: center;
				justify-content: flex-start;
			}
			&-value {
				font-size: 14px;
				font-family: AlibabaPuHuiTiH;
				font-weight: 400;
				font-style: italic;
				color: #ceddef;
				line-height: 14px;
				padding: 0 18px;
				background: linear-gradient(-26deg, #00d8ff 0%, #afffdc 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
		&-check {
			height: calc(40% - 33px);
			width: 100%;
			background-image: url(../assets/slices/check.png);
			background-repeat: no-repeat;
			background-size: 100% auto;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
			padding-top: 24px;
			padding-left: 23%;
			&-name {
				font-size: 20px;
				font-family: Adobe Heiti Std;
				font-weight: normal;
				font-style: italic;
				color: #e0ecff;
				margin-bottom: 16px;
			}
			&-value-box {
				font-size: 20px;
				font-family: Adobe Heiti Std;
				font-weight: normal;
				font-style: italic;
				color: #e0ecff;
				display: flex;
				align-items: flex-end;
				justify-content: flex-start;
			}
			&-value {
				font-size: 37px;
				font-family: AlibabaPuHuiTiH;
				font-weight: 400;
				font-style: italic;
				color: #ceddef;
				background: linear-gradient(-26deg, #00d8ff 0%, #afffdc 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				line-height: 40px;
				padding-right: 8px;
			}
		}
	}
	&-bottom {
		height: 35%;
		.dashbord-show {
			height: calc(100% - 72px);
			&-dashboard {
				height: 100%;
			}
		}
	}
}
.center-right {
	&-top {
		height: 65%;
		&-brow {
			height: calc(100% - 60px);
		}
		&-projecter {
			height: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	&-bottom {
		height: 35%;
		&-data {
			height: calc(100% - 60px);
		}
		&-numerical {
			padding: 1rem;
		}
	}
}
.bottom {
	height: 25%;
	&-data {
		height: calc(100% - 60px);
	}
	&-numerical {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
		padding: 1rem;
	}
}
.position-rel {
	position: relative;
}
.position-right {
	position: absolute;
	right: 0;
	top: 8px;
}
.bottom-line-data {
	height: calc(100% - 60px);
}
.simple-header {
	width: 100%;
	font-size: 20px;
	color: #fff;
	height: 60px;
	font-weight: bold;
	background-image: url(../assets/slices/titleSimple.png);
	background-repeat: no-repeat;
	background-size: 100% auto;
	padding-left: 80px;
	position: relative;
	padding-top: 8px;
}
.center-header {
	font-size: 30px;
	font-family: AlibabaPuHuiTiB;
	font-weight: 400;
	font-style: italic;
	color: #ceddef;
	text-shadow: 27px 55px 80px rgba(0, 0, 0, 0.2);
	background: linear-gradient(0deg, #ffffff 0%);
	background-clip: text;
	-webkit-background-clip: text;
	position: absolute;
	top: 224px;
	left: 18px;
}
.another-header {
	width: 100%;
	font-size: 20px;
	color: #fff;
	height: 60px;
	font-weight: bold;
	background-image: url(../assets/slices/titleCenter.png);
	background-repeat: no-repeat;
	background-size: 100% auto;
	padding-top: 16px;
	position: relative;
	text-align: center;
}
</style>
