<template>
	<div id="mayMap"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue' // 主要
import wuxi from '@/assets/wuxi.json'
let echarts: any = inject('echarts') // 主要
onMounted(() => {
	changetype()
})

const mtPath =
	'path://M515.9 949.5c-10.6 0-16.4-1.3-20.1-5.6-2.2-2.6-227-269.5-287-398.7-21.6-46.3-33.1-96.5-33.1-145.6 0-185 152.6-335.4 340.2-335.4s340.2 151.5 340.2 337.6c0 56.2-10.5 98.7-36.4 146.6-71.4 132.4-281.2 392.3-283.3 394.9-2.5 3.1-7 6.2-19.9 6.2h-0.6z m0-679.3c-72.1 0-130.8 58.7-130.8 130.8s58.7 130.8 130.8 130.8S646.7 473.1 646.7 401c0.1-72.1-58.6-130.8-130.8-130.8z'

// 折线图
const changetype = () => {
	// 获取组件实例
	const machart = echarts.init(document.getElementById('mayMap'))
	// 设置配置项
	console.log(wuxi)
	echarts.registerMap('wuxi', wuxi)
	const option = {
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(166, 200, 76, 0.82)',
			borderColor: '#FFFFCC',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
			formatter: function (params: any) {
				//根据业务自己拓展要显示的内容
				var res = ''
				var value = params.value
				res = "<span style='color:#fff;'>" + value[2] + '</span><br/>' + value[3]
				return res
			}
		},
		grid: {
			top: 20,
			bottom: 20
		},
		// backgroundColor:"#2b2b2b",
		geo: {
			map: 'wuxi',
			aspectScale: '1',
			zoom: 1.2,
			label: {
				normal: {
					position: [10, 10],
					show: true,
					color: '#fff'
				},
				emphasis: {
					show: false
				}
			},
			roam: true, //是否允许缩放
			itemStyle: {
				normal: {
          areaColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgb(114,195,214)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgb(57,96,165)'// 100% 处的颜色
            }],
            global: false // 缺省为 false
          }, //地图背景色
					// 	borderColor: '#516a89', //省市边界线00fcff 516a89
					borderColor: 'rgb(114,195,214)',
					borderWidth: 2
				},
				emphasis: {
					show: false,
					// 	color: 'rgba(37, 43, 61, .5)' //悬浮背景
					color: '#3093d8'
				}
			}
		},
		series: [
			{
				type: 'graph',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					brushType: 'stroke'
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: '{b}'
					}
				},
				symbolSize: 18,
				symbolKeepAspect: true,
				itemStyle: {
					normal: {
						color: '#545'
					},
					emphasis: {
						areaColor: '#2B91B7'
					}
				},
				data: []
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

<style scoped></style>
