<template>
	<div :id="'dashboard' + props.dashbordId" class="dashboard-content"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue' // 主要
const props = defineProps({ dashbordId: { type: String }, nameTitle: { type: String }, titleLeft: { type: Number } })

let echarts: any = inject('echarts') // 主要

onMounted(() => {
	changetype()
})

// 折线图
const changetype = () => {
	// 获取组件实例
	const machart = echarts.init(document.getElementById('dashboard' + props.dashbordId))

	const getmax = 100
	//要改变的数据
	const getvalue = 50

	const option = {
		graphic: {
      show: true,
			type: 'text',
			left: props.titleLeft + '%',
			top: '78%',
			style: {
				text: props.nameTitle,
				textAlign: 'center', //居中对齐
				fill: 'rgb(128,228,254)', //填充色
				fontSize: 18,
        fontWeight: 'bold'
			}
		},
		grid: {
			top: 0,
			bottom: 0
		},
		angleAxis: {
			show: false,
			max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
			type: 'value',
			startAngle: 225, //极坐标初始角度
			splitLine: {
				show: false
			}
		},
		barMaxWidth: 12, //圆环宽度
		radiusAxis: {
			show: false,
			type: 'category'
		},
		//圆环位置和大小
		polar: {
			center: ['50%', '50%'],
			radius: '170%'
		},

		series: [
			{
				type: 'bar',
				data: [
					{
						//上层圆环，显示数据
						value: getvalue,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#086CAF' // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#1598FF' // 100% 处的颜色
									}
								],
								global: false // 缺省为 false
							}
						}
					}
				],
				barGap: '-100%', //柱间距离,上下两层圆环重合
				coordinateSystem: 'polar',
				roundCap: false, //顶端圆角
				z: 3 //圆环层级，同zindex
			},
			{
				//下层圆环，显示最大值
				type: 'bar',
				data: [
					{
						value: getmax,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: 'rgb(96,86,84)' // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(0,0,0,.1)' // 100% 处的颜色
									}
								],
								global: false // 缺省为 false
							},
							opacity: 1,
							borderWidth: 0
						}
					}
				],
				barGap: '-100%',
				coordinateSystem: 'polar',
				roundCap: false,
				z: 1
			},
			//仪表盘
			{
				type: 'gauge',
				splitNumber: 4, //刻度数量
				startAngle: 225, //起始角度，同极坐标
				endAngle: -45, //终止角度，同极坐标
				axisLine: {
					show: false
				},
				splitLine: {
					show: true,
					length: -10,
					lineStyle: {
						color: '#086CAF', //用颜色渐变函数不起作用
						width: 2
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true,
					distance: 25,
					color: 'rgb(132,9,68)',
					fontSize: 12
				},
				splitLabel: {
					show: false
				},
				pointer: {
					// 分隔线
					shadowColor: 'auto', //默认透明
					shadowBlur: 5,
					length: '50%',
					width: '2',
					show: false
				},
				itemStyle: {
					color: '#1598FF',
					borderColor: '#1598FF',
					borderWidth: 6
				},
				detail: {
					formatter: function () {
						// return '完成率\n'+getvalue + '%';
						return `{number|${getvalue}}{percent|%}`
					},
					rich: {
						number: {
							fontSize: 40,
							fontWeight: 'bold',
							color: '#edbe2c',
							textAlign: 'center'
						},
						percent: {
							fontSize: 16,
							textAlign: 'center'
						}
					},
					color: '#fff',
					lineHeight: 30,
					offsetCenter: ['0', '0']
				},
				title: {
					show: true
				},
				data: [
					{
						value: getvalue
					}
				]
			},
			{
				name: '外部刻度',
				type: 'gauge',
				//  center: ['20%', '50%'],
				// radius: '70%',
				min: 0, //最小刻度
				max: 100, //最大刻度
				splitNumber: 10, //刻度数量
				startAngle: 225,
				endAngle: -45,
				axisLine: {
					show: true,
					lineStyle: {
						width: 1,
						color: [[1, 'rgba(0,0,0,0)']]
					}
				}, //仪表盘轴线
				axisLabel: {
					show: false
				}, //刻度标签。
				axisTick: {
					show: true,
					splitNumber: 10,
					lineStyle: {
						color: '#086CAF', //用颜色渐变函数不起作用
						width: 2
					},
					length: -8
				}, //刻度样式
				splitLine: {
					show: false,
					length: -20,
					lineStyle: {
						color: '#fff' //用颜色渐变函数不起作用
					}
				}, //分隔线样式
				detail: {
					show: false
				},
				pointer: {
					show: false
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

<style lang="scss" scoped>
.dashboard-content {
	height: 100%;
	width: 100%;
}
</style>
