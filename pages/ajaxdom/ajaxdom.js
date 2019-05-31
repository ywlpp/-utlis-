// pages/ajaxdom/ajaxdom.js
import {fechdata} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:"",
    searchlist:[] //搜索列表的数据
  },
  tosearch(e){
    // input的value值改变事件 e是事件源
    let sval = e.detail.value;
    if(sval===""){
      this.setData({
        searchlist:[]
      })
      return;
    }
    this.setData({
      val:sval
    })
    this.searchajax()
  },
  searchajax(){
        let searchurl = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=a";
    let data = {
      wd: this.data.val
    }
    fechdata(searchurl, data).then(res => {
      let strlen = 18;
      let wdlen = data.wd.length;
      let len = strlen + wdlen;
      // console.log(res)
      let udata = res.slice(len, -3)
      console.log(udata)
      udata = JSON.parse(udata)
      this.setData({
        searchlist:udata
      })
    })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let ajaxurl =     "https://www.easy-mock.com/mock/5ce3f0149c7de85c5be2b756/news";         let data=await fechdata(ajaxurl)
    console.log(data)
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