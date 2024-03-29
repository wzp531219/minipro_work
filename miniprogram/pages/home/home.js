// pages/home/home.js
let tabTransBaseNum = Math.floor(776 / 6);
console.log(tabTransBaseNum)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/images/index/1.png",
      "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
      "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    moduleList: [
      { "moduleId": "1", "login": "1", "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/modules/module_03.png?sign=5382a60ae5d40a39bfdf5b3ab36ffd4c&t=1574905268", "skipUrl": "selfhelp?isShare=0", "title": "女装" },
      { "moduleId": "1", "login": "1", "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/modules/module_05.png?sign=a7b5cf467fd444cd98bad05f7f5930fb&t=1574905299", "skipUrl": "selfhelp?isShare=0", "title": "上衣" },
      { "moduleId": "1", "login": "1", "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/modules/module_07.png?sign=f5a4fe0f01e25cb4176a431af910da40&t=1574905322", "skipUrl": "selfhelp?isShare=0", "title": "裤子" },
      { "moduleId": "1", "login": "1", "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/modules/module_09.png?sign=fe946457dcdfa7bfba40ce084f67bf44&t=1574905332", "skipUrl": "selfhelp?isShare=0", "title": "鞋子" },
      { "moduleId": "1", "login": "1", "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/modules/module_11.png?sign=3340181110842932e8ec555a15609ef6&t=1574905345", "skipUrl": "selfhelp?isShare=0", "title": "更多" }
    ],
    limitedList: [
      { "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/limited/limit_09.png?sign=5ca21b8c4495e6aff1c4bd93e0484d3e&t=1574912528", "discountedPrice": "345", "couponMarketPrice": "500" },
      { "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/limited/limit_07.png?sign=38a438255f23c925ed264e6be87a205c&t=1574912563", "discountedPrice": "345", "couponMarketPrice": "500" },
      { "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/limited/limit_05.png?sign=2d8afecbf9f8fd7d0cd13434365eb70c&t=1574912577", "discountedPrice": "345", "couponMarketPrice": "500" },
      { "imgUrl": "https://777a-wzp-nouoh-1300726591.tcb.qcloud.la/limited/limit_03.png?sign=7a0707fc2dfd2d341700b199c08b827f&t=1574912587", "discountedPrice": "345", "couponMarketPrice": "500" },
    ],
    subClassList: [
      {
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
        "subClassName": "服饰",
      },
      {
        "couponSonTypeid": "4",
        "tradeId": 132,
        "mallId": "10000060080120",
        "subClassName": "生活",
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
        "subClassName": "包包",
      },
      {
        "couponSonTypeid": "7",
        "tradeId": 132,
        "mallId": "10000060080120",
        "subClassName": "短裤",
      },
      {
        "couponSonTypeid": "8",
        "tradeId": 132,
        "mallId": "10000060080120",
        "subClassName": "短裤",
      },
    ],
    subContentList: [
      { imgUrl: "/images/index/list.jpg", commodityName: '毛呢大衣', marketPrice: "199", amountPrice: "70", poolId: "5d9fea16117068d7b2649234", sonTypeid: "1"},
      { imgUrl: "/images/index/1.jpg", commodityName: '质感单肩背包', marketPrice: "199", amountPrice: "70", poolId: "5d9fea16117068d7b2649234", sonTypeid: "2" },
      { imgUrl: "/images/index/2.jpg", commodityName: '气质兔子耳钉', marketPrice: "199", amountPrice: "70", poolId: "5d9fea16117068d7b2649234", sonTypeid: "3" },
      { imgUrl: "/images/index/3.jpg", commodityName: '适合冬天的百搭毛球耳坠', marketPrice: "199", amountPrice: "70", poolId: "5d9fea16117068d7b2649234", sonTypeid: "4" },
      { imgUrl: "/images/index/4.jpg", commodityName: '毛呢大衣', marketPrice: "199", amountPrice: "70", poolId: "5d9fea16117068d7b2649234", sonTypeid: "5" },

    ],
    activeSubClass: 0
  },
  switchClassEvent:function(e){
    console.log(e)
    const ind = e.currentTarget.dataset.ind;
    this.setData({
      activeSubClass: ind,
      tabTransNum : tabTransBaseNum * ind
    })
    console.log(tabTransBaseNum * ind)
  },
  // 进入商品详情
  goComDetailEvent(e){
    console.log(e)
    let poolid = e.currentTarget.dataset.poolid;
    wx.navigateTo({
      url: '/pages/shopTrolley/shopDetail/shopDetail?poolId=' + poolid
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '首页',
      path: '/pages/home/home'
    }
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