//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    msg:'hello world',
    flag:true,
    list:[1,2,3,4]
  },
  toaudio(){
    wx.navigateTo({
      url: '../audio/audio',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function () {
  
  }
})
