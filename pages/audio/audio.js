// pages/audio/audio.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: app.globalMusicflag   
  },
  initmusic(BackgroundAudioManager) {

    BackgroundAudioManager.title = "我的音乐"
    BackgroundAudioManager.src = 'http://153.37.232.149/amobile.music.tc.qq.com/C400001aIgyZ14kzcQ.m4a?guid=540915665&vkey=7F78EF080D42D410A8BA52147EA2D47D0C894CD2BFAFDCBF6421CF37B8F6256ACC80E77B825A9451E239DB5E6861B248BD0108748C2FF30F&uin=0&fromtag=66';
    
  },

  playmusic() {
    let BackgroundAudioManager = wx.getBackgroundAudioManager();
    if (this.data.flag) {
      this.initmusic(BackgroundAudioManager)
      app.globalMusicflag = false;      
      this.setData({
        flag: app.globalMusicflag
      })
    } else{
      app.globalMusicflag = true;      
      BackgroundAudioManager.pause()
      this.setData({
      flag:app.globalMusicflag
      })
    }
// 监听系统背景音乐播放时间
    BackgroundAudioManager.onPlay(()=>{
      app.globalMusicflag = false;
      this.setData({
        flag: app.globalMusicflag
      })
    })
    // 监听系统背景音乐暂停时间
    BackgroundAudioManager.onPause(()=>{
      app.globalMusicflag = true;
      this.setData({
        flag:app.globalMusicflag
      })

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      flag:app.globalMusicflag
    })
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