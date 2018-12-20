var myChart = echarts.init(document.getElementById('main'));
var option = {
  tooltip : {
      trigger: 'axis'
  },
  legend: {
      data: ['我的酒店', '同行酒店', '平均房价']
  },
  grid: {
      top: '12%',
      left: '10%',
      right: '10%',
      containLabel: true
  },
  xAxis: [
      {
          type : 'category',
          data : data.times
      }
  ],
  yAxis: [
      {
          type : 'value',
          name : '入住间夜'
      }
  ],
  dataZoom: [
      {
          type: 'slider',
          show: true,
          start: 50,
          end: 100,
          handleSize: 8
      }/* ,
      {
          type: 'inside',
          start: 0,
          end: 100
      }, */
  ],
  series : [
      {
          name: '我的酒店',
          type: 'bar',
          data: data.myPoiDatas
      },
      {
          name: '同行酒店',
          type: 'bar',
          data: data.othersPoiDatas
      },
      {
          name:'平均房价',
          type:'line',
          data: data.averageData
      }
  ]
};

myChart.setOption(option);