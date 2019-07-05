const app = getApp();
var bmap = require("../../pages/libs/wxapp-jsapi-master/demo/libs/bmap-wx.min.js");
Page({
  data: {
    forecast :'',
    weatherData: ''
  },
  onLoad: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'Y0hyzEiTbWHoGu2OBW3BKQczhyXFZXFu'
      });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      console.log(data)
      var weatherData = data.currentWeather[0];
      var forecast = new Array(3);
      for (var i = 0; i < 3; i++) {
        forecast[i] = data.originalData.results[0].weather_data[i + 1];
      }
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData,
        forecast: forecast
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  }
})
