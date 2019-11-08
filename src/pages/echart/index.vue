<template>
  <div>
    <headDIV :title="title"></headDIV>
    <div class="wrap-echart">
      <mpvueEcharts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas"></mpvueEcharts>
    </div>
  </div>
</template>

<script>
import headDIV from '@/components/head'
import mpvueEcharts from 'mpvue-echarts'
import echarts from 'echarts'
let chart = null
function initChart (canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  const model = {
    yCates: ['周一', '周二', '周三',
      '周四', '周五', '周六',
      '周日'],
    xCates: ['1', '2', '3', '4', '5'],
    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
      [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
      [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
      [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
      [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
      [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
    ]
  }
  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-']
  })
  const option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      bottom: 60,
      top: 30,
      left: 60
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#ffffff'
        }
      },
      data: model.xCates
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#ffffff'
        }
      },
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F']
      }
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }

  chart.setOption(option)
  return chart // 返回 chart 后可以自动绑定触摸操作
}
export default {
  components: {
    headDIV,
    mpvueEcharts
  },
  data () {
    return {
      echarts,
      title: '图表',
      onInit: initChart
    }
  },
  created () {
  }
}
</script>

<style>
  page {
    background-color: #0e2147;
  }
  .blank{
    font-size: 12px;
    background: #fff;
    height: 90rpx;
    line-height: 90rpx;
    padding-left: 15px;
  }
  .wrap-echart {
    margin-top: 5vh;
    width: 100%;
    height: 80vh;
  }
</style>
