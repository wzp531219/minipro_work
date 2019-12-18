// pages/purchaseOrder/purchaseOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingList: [
      {
        "shopId": "0", "storeName": "千库时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "夏季新款小清新显瘦连衣裙", "quantity": 1,
        "shopUrl": "/images/shop/3.jpg", "shopColor": "浅蓝色", "reducePrice": "30", "salesPrice": "168", "marketPrice": "399", "isVoucher": "1", "quantity": 1
      },
      { "shopId": "1", "storeName": "萌萌时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "女装新款小方格子浅黄色衬衣", "shopUrl": "/images/shop/1.jpg", "shopColor": "浅蓝色", "reducePrice": "50", "salesPrice": "160", "marketPrice": "199", "isVoucher": "0", "quantity": 1 },
      { "shopId": "2", "storeName": "千库时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "初秋洋气格子衬衫", "shopUrl": "/images/shop/2.jpg", "shopColor": "图片色", "reducePrice": "0", "salesPrice": "60", "marketPrice": "99", "isVoucher": "0", "quantity": 1 }
    ],
    totalPrice: 0, // 总金额
    selectArr: []
  },
  loadOrders() {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadOrders();
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