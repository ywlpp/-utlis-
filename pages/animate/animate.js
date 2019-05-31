// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anmiteData:{}
    // 初始化动画元素
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
      let animation = wx.createAnimation({
        duration:1000,
        timingFunction: 'linear',
        delay:100,
        // transformOrigin:
        // 动画中心点
      }) 
      // 把动画挂载在实例上
      this.animation=animation
      animation
      .rotate(360)
      .scale(0.5)
      .step() 
      ,animation
      .rotate(0)
      .scale(1)
      .step()
        
      // 需要把animation赋值给动画对象anmiteData
      setTimeout(()=>{
        this.setData({
          anmiteData:
          animation.export()
        })
      },1000)
      // 导出动画队列，export方法每次调用后会清掉之前的动画操作，如果不写           export无法进行下一次动画操作
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})