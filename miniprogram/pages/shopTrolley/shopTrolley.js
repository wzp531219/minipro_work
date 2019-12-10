// pages/shopTrolley/shopTrolley.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingList: [
      { "shopId": "0","storeName": "千库时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "夏季新款小清新显瘦连衣裙",
      "shopUrl":"/images/shop/3.jpg", "shopColor": "浅蓝色", "reducePrice": "30", "salesPrice": "168", "marketPrice": "399", "isVoucher": "1"},
      { "shopId": "1","storeName": "萌萌时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "女装新款小方格子浅黄色衬衣", "shopUrl": "/images/shop/1.jpg","shopColor": "浅蓝色", "reducePrice": "50", "salesPrice": "160", "marketPrice": "199", "isVoucher": "0" },
      { "shopId": "2","storeName": "千库时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "初秋洋气格子衬衫", "shopUrl": "/images/shop/2.jpg", "shopColor": "图片色", "reducePrice": "0", "salesPrice": "60", "marketPrice": "99", "isVoucher": "0" }
    ],
    shopNum: 1,
    fullSelect: false,
    fullNum: 0,
    selectArr: []
  },
  // 进入详情
  goShopDetail() {
    wx.navigateTo({
      url: './shopDetail/shopDetail'
    })
  },
  // 选中
  selectBtn(e) {
    console.log(e)
    let id = e.currentTarget.dataset.shopid;
    const shopList = this.data.shoppingList;
    let selectArr = this.data.selectArr;
    shopList.forEach((v, ind)=>{
      if(v.shopId == id){
        v.isSelect = !v.isSelect;
        if (v.isSelect) {
          selectArr.push(v);
          this.setData({
            selectArr
          })
          console.log('选中',this.data.selectArr)
        } else {
          // 批次
          let spliceId = selectArr.indexOf(id)
          selectArr.splice(spliceId, 1);
          this.setData({
            selectArr
          })
          console.log('取消', this.data.selectArr)
        }
      }
    })
    this.setData({
      shoppingList: shopList
    })
  },
  // 全选
  fullSelect() {
    const shopList = this.data.shoppingList;
    shopList.forEach((v, ind) => {
      v.isSelect = !v.isSelect;
    })
    this.setData({
      shoppingList: shopList
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