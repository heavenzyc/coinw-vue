<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <div class="row">
      <div class="span2" id="COINS" style="width: 600px;height:400px;"></div>
      <div class="span2" id="OMG" style="width: 600px;height:400px;"></div>
      <div class="span2" id="BTC" style="width: 600px;height:400px;"></div>
      <div class="span2" id="TNT" style="width: 600px;height:400px;"></div>
      <div class="span2" id="EOS" style="width: 600px;height:400px;"></div>
      <div class="span2" id="ETH" style="width: 600px;height:400px;"></div>
      <div class="span2" id="LTC" style="width: 600px;height:400px;"></div>
      <div class="span2" id="ENJ" style="width: 600px;height:400px;"></div>
      <div class="span2" id="AE" style="width: 600px;height:400px;"></div>
    </div> 
    

  </div>
</template>

<script>
export default {  
  name: 'App',
  mounted () {

    var list = ['COINS', 'OMG','BTC','TNT','EOS','ETH','LTC','ENJ','AE']
    for (var i = 0; i < list.length; i++){
      this.drawLine(list[i])
    }
  },
  methods:{
    drawLine (board) {
        var myChart = this.echarts.init(document.getElementById(board));
        this.axios({
                method:'get',
                url: 'http://192.168.2.100:8081/coinw/trend/'+board
            }).then(function(res){
                myChart.setOption({
                  title:{
                    text: board
                  },
                  legend: {
                      data:['high','low']
                  },
                  toolbox: { //可视化的工具箱
                      show: true,
                      feature: {
                          dataView: { //数据视图
                              show: true
                          },
                          magicType: {//动态类型切换
                              type: ['bar', 'line']
                          }
                      }
                  },
                  tooltip:{
                    trigger: 'axis'
                  },
                  xAxis:{
                    type: 'category',
                    data: res.data.data.date
                  },
                  yAxis: {
                        type: 'value'
                    },
                  series: [{
                    name:'low',
                    data: res.data.data.low,
                    type: 'line'
                  },
                  {
                    name:'high',
                    data: res.data.data.high,
                    type: 'line'
                  }]
                });
            });
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
}
</style>
