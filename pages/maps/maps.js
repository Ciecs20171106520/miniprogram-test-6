Page({
  data: {
    aa:0,
    bb:0,
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/pages/images/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/pages/images/location.png'
    }]
  },
  onLoad:function(event){
    var latitude
    var longitude
    try{
      var value1 = wx.getStorageSync('latitude')
      if (value1) {
        this.setData({
         latitude: value1
        })
      }}
    catch (e) {
    }
    try {
      var value2 = wx.getStorageSync('longitude')
      if (value2) {
        this.setData({
          longitude: value2
        })
      }
    } catch (e) {
    }
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    var that =this
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
        that.setData({
          aa: res.longitude,
          bb: res.latitude,
        })
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    var that = this
    try {
      var value1 = wx.getStorageSync('latitude')
    }
    catch (e) {
    }
    try {
      var value2 = wx.getStorageSync('longitude')
    } catch (e) {
    }
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: false,
      duration: 1000,
      destination: {
        latitude: this.data.latitude,
        longitude: this.data.longitude,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
})