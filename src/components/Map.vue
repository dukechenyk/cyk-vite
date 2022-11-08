<template>
	<div id="mayMap" class="map"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue' // 主要
import wuxi from '@/assets/wuxi.json'
let echarts: any = inject('echarts') // 主要
onMounted(() => {
	changetype()
})

// 折线图
const changetype = () => {
	// 获取组件实例
	const machart = echarts.init(document.getElementById('mayMap'))
	// 设置配置项
	console.log(wuxi)
	echarts.registerMap('wuxi', wuxi)
	const option = {
		geo: {
			map: 'wuxi',
			zoom: 1.1,
      label: {
        show: true,
        color: "#fff",
        fontSize: 16
      },
			roam: false,
			itemStyle: {
				normal: {
          areaColor: {
            type: 'linear-gradient',
            x: 1000,
            y: 700,
            x2: 200,
            y2: 200,
            colorStops: [{
                offset: 0, color: 'rgba(0, 255, 144,.4)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(0, 96, 255, .4)' // 100% 处的颜色
            }],
            global: true // 缺省为 false
          }, //地图背景色
					borderColor: 'rgb(114,195,214)',
          borderWidth: 1,
          shadowColor: 'rgba(0, 96, 255, .2)',
          shadowOffsetX: 10,
          shadowOffsetY: -30
				},
				emphasis: {
					show: false,
						color: 'rgba(0, 96, 255, .4)' //悬浮背景
					// color: '#3093d8'
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
						color: '#fff'
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

<style lang="scss" scoped>
.map{
  height: 100%;
  width: 100%;
}
</style>
