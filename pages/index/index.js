Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagepath: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  in1: function (event) {
    var first = this
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        first.setData({
          imagepath: res.tempFilePaths,
        })
        wx.navigateTo({
          url: '/pages/photos/photos',
        })
      }
    })
  }
})
