Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
  },
  bindKeyInput1:function(event){
    this.setData({
      latitude: event.detail.value
    })
  },
  bindKeyInput2: function (event) {
    this.setData({
      longitude: event.detail.value
    })
  },
  gpss1:function(event){
    wx.setStorage({
      key: 'latitude',
      data: this.data.latitude,
    })
    wx.setStorage({
      key: 'longitude',
      data: this.data.longitude,
    })
    wx.navigateTo({
      url: '/pages/maps/maps',
    })
  }
  
})