// pages/classif/classif.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    navLeftType: [{
      "couponSonTypeid": "0",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "推荐",
    },
    {
      "couponSonTypeid": "1",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "配饰",
    },
    {
      "couponSonTypeid": "2",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "服饰",
    },
    {
      "couponSonTypeid": "3",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "护肤",
    },
    {
      "couponSonTypeid": "4",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "鞋靴",
    },
    {
      "couponSonTypeid": "5",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "包包",
    },
    {
      "couponSonTypeid": "6",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "男装",
    },
    {
      "couponSonTypeid": "7",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "套装",
    },
    {
      "couponSonTypeid": "8",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "家居",
    },
    {
      "couponSonTypeid": "9",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "裤子",
    },
    {
      "couponSonTypeid": "10",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "裙子",
    },
    {
      "couponSonTypeid": "11",
      "tradeId": 132,
      "mallId": "10000060080120",
      "subClassName": "上衣",
    },
    ], // 左侧导航
    navRightCon: {
      "0": [
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/1.jpg",
          "productName": "鞋子",
          "poolId": "1"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/2.jpg",
          "productName": "鞋子",
          "poolId": "2"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/5.jpg",
          "productName": "鞋子",
          "poolId": "3"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/3.jpg",
          "productName": "鞋子",
          "poolId": "4"
        },
      ],
      "1": [
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/2.jpg",
          "productName": "配饰",
          "poolId": "1"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/2.jpg",
          "productName": "鞋子",
          "poolId": "2"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/5.jpg",
          "productName": "鞋子",
          "poolId": "3"
        },
      ],
      "2": [
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/list.jpg",
          "productName": "服饰",
          "poolId": "1"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/2.jpg",
          "productName": "鞋子",
          "poolId": "2"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/5.jpg",
          "productName": "鞋子",
          "poolId": "3"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/2.jpg",
          "productName": "鞋子",
          "poolId": "4"
        },
      ],
      "3": [
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/1.jpg",
          "productName": "护肤",
          "poolId": "1"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/2.jpg",
          "productName": "鞋子",
          "poolId": "2"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/5.jpg",
          "productName": "鞋子",
          "poolId": "3"
        },
        {
          "couponSonTypeid": "1",
          'imgUrl': "/images/index/4.jpg",
          "productName": "鞋子",
          "poolId": "4"
        },
      ],
    }, // 右侧内容
    curIndex: 0
  },
  // 改变tab栏
  curTabEvent({
    currentTarget: {
      dataset: {
        index: item
      }
    }
  }) {
    this.setData({
      curIndex: item
    })
  },
  // 去往列表页
  gotoProductDetail({
    currentTarget: {
      dataset: {
        product: name
      }
    }
  }) {
    wx.navigateTo({
      url: `/pages/productlist/productlist?name=${name}`
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