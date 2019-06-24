 Page({
   data: {
     
   },
   onLoad: function (options) {
     var first = this
     wx.chooseImage({
       success: function (res) {
         console.log(res)
         first.setData({
           imagepath: res.tempFilePaths,
         })
      
       }
     })
     
   },
 
 })