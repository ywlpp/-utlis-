// pages/artlist/artlist.js
import { articleData,stararray } from '../../utils/util';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    artData:[],
    nl:3
  },
  todetail(e){
    console.log(e)
    let artid=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../artdet/artdet?artid=${artid}`,
    })
  },
  tobottom(){
    // console.log('awdsad')
    // nl比数组的长度大证明已经没有数据了
    if(this.data.nl>=articleData.length){
        return
    }
    //  每滚动一次 nl加三
    // this.setData({
    //   nl:this.data.nl+3
    // })
    this.setData({
      // 滚动到底部
      artData:[
        ...this.data.artData,
          ...articleData.slice(this.data.nl, this.data.nl+3)],
          nl:this.data.nl+3
    })
    console.log(this.data.nl)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 把评分转换成星星的个数数组用[1，1，1，1，0]四分评分
    let newdata = articleData
    articleData.map(item=>{
      item.roating=stararray(item.roating)
      return item
    })
    console.log(newdata)
      this.setData({
        artData: articleData
      })
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