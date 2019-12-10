// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mineMod: [
      { "id": 0, "tit": "待付款", "imgUrl": "/images/mine/mine_mod.png" },
      { "id": 1, "tit": "待发货", "imgUrl": "/images/mine/mine_mod1.png" },
      { "id": 2, "tit": "待收货", "imgUrl": "/images/mine/mine_mod2.png" },
      { "id": 3, "tit": "售后", "imgUrl": "/images/mine/mine_mod3.png" },
      { "id": 4, "tit": "全部订单", "imgUrl": "/images/mine/mine_mod4.png"}
    ],
    mineList: [
      { "id": 0, "icon": "/images/mine/signIn.png", "tit": "每日签到", "desc": "去签到" },
      { "id": 1, "icon": "/images/mine/deposit.png", "tit": "充值中心", "desc": "" },
      { "id": 2, "icon": "/images/mine/invite.png", "tit": "邀请有礼", "desc": "最高得100元" },
      { "id": 3, "icon": "/images/mine/scrabble.png", "tit": "超级拼团", "desc": "" },
      { "id": 4, "icon": "/images/mine/setup.png", "tit": "设置中心", "desc": "" }
    ]
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