// pages/shopTrolley/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {
      "imgUrl": "/images/shop/detail.png",
      "shopName": '新品学院风百搭时尚同情优惠格子亲肤柔和衬衫',
      "priceReNotice": "1",
      "shopPrice": "109"
    },
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration:1000,
    imgUrls: ["/images/shop/detail.png", "/images/shop/detail.png"],
    good: {},
    quantity: 0
  },
  addGood(){
    // 具体逻辑还未写
    wx.showToast({
      title: "添加成功",
      icon: "success",
      duration: 2000
    })
  },
  buyEvent(e){
    var id = e.target.shopid;
    wx.navigateTo({
      url: '/pages/purchaseOrder/purchaseOrder?id='+id,
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