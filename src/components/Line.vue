<template>
	<div :id="'line' + props.lineId" class="line"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue' // 主要
const props = defineProps({ lineId: { type: String }})
let echarts: any = inject('echarts') // 主要

onMounted(() => {
	changetype()
})
// 折线图
const changetype = () => {
	// 获取组件实例
	const machart = echarts.init(document.getElementById('line' + props.lineId))
	// 设置配置项
	const option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			top: '5%',
			left: '8%',
			right: '8%',
			bottom: '10%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisLine: {
					show: true,
					lineStyle: {
						color: '#192d7e',
						width: 1,
						type: 'solid'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#fff'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					formatter: '{value}%',
					textStyle: {
						color: '#fff'
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#0a3e98',
						width: 0,
						type: 'solid'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#063374',
						type: 'dotted'
					}
				},
				nameTextStyle: {
					color: '#fff',
					fontSize: 11
				}
			}
		],
		series: [
			{
				name: '对接情况',
				type: 'bar',
				data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66, 80, 45],
				smooth: true,
				barWidth: 8, //柱子宽度
				barGap: 0.5, //柱子之间间距
				animationDuration: function (idx: number) {
					return idx * 500 + 1000
				},
				areaStyle: {
					//区域填充样式
					normal: {
						//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
						color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: 'rgba(175, 255, 220, 1)'
								},
								{
									offset: 0.9,
									color: 'rgba(230,104,78, 0)'
								}
							],
							false
						),
						shadowColor: 'rgba(175, 255, 220, 1)', //阴影颜色
						shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
					}
				},
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(175, 255, 220, 1)'
							},
							{
								offset: 1,
								color: 'rgba(0, 216, 255, 1)'
							}
						]),
						opacity: 1
					}
				}
			}
		]
	}
	// 复制
	machart.setOption(option)
	// 根据页面大小自动响应图表大小
	window.addEventListener('resize', function () {
		machart.resize()
	})
}
</script>

<style scoped>
.line {
	height: 100%;
	width: 100%;
}
</style>
