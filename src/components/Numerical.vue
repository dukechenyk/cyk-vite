<template>
	<div :id="'numerical' + props.numericalId" class="numerical-content"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue' // 主要
const props = defineProps({ numericalId: { type: String } })

let echarts: any = inject('echarts') // 主要

onMounted(() => {
	changetype()
})

// 折线图
const changetype = () => {
	// 获取组件实例
	const machart = echarts.init(document.getElementById('numerical' + props.numericalId))

	const getmax = 100
	//要改变的数据
	const getvalue = 50

	const option = {
		series: [
			{
				type: 'gauge',
				center: ['50%', '50%'],
				startAngle: 225,
				endAngle: -45,
				min: 0,
				max: getmax,
				splitNumber: 8,
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
                color: 'rgba(175, 255, 220, 1)' // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 216, 255, 1)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
				progress: {
					show: true,
					width: 10
				},
				pointer: {
					show: false
				},
				axisLine: {
          show: true,
					lineStyle: {
            color: [[1, 'rgba(29, 39, 70, 0.6700)']],
						width: 10
					}
				},
				axisTick: {
					distance: -30,
					length: 10,
					splitNumber: 6,
					lineStyle: {
						width: 2,
						color: 'rgba(60, 76, 124, 1)'
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: false
				},
				anchor: {
					show: false
				},
				title: {
					show: false
				},
				detail: {
					valueAnimation: true,
					width: '70%',
					fontWeight: 'bolder',
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
							fontSize: 12,
							textAlign: 'center',
							color: '#edbe2c',
						}
					},
					color: '#fff',
					lineHeight: 30,
					offsetCenter: ['0', '0']
				},
				data: [
					{
						value: getvalue
					}
				]
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
.numerical-content {
	height: 100%;
	width: 100%;
}
</style>
