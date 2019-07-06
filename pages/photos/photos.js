 Page({
   data: {
     
   },
   onLoad: function (options) {
     var first = this
     wx.chooseImage({
       count: 9,
       success: function (res) {
         console.log(res)
         first.setData({
           imagepath: res.tempFilePaths,
         })
       }
     })
     
   },
 
 })