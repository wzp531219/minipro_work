// pages/shopTrolley/shopTrolley.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingList: [
      {
        "shopId": "0", "storeName": "千库时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "夏季新款小清新显瘦连衣裙","quantity": 1,
        "shopUrl": "/images/shop/3.jpg", "shopColor": "浅蓝色", "reducePrice": "30", "salesPrice": "168", "marketPrice": "399", "isVoucher": "1", "quantity": 1},
      { "shopId": "1", "storeName": "萌萌时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "女装新款小方格子浅黄色衬衣", "shopUrl": "/images/shop/1.jpg", "shopColor": "浅蓝色", "reducePrice": "50", "salesPrice": "160", "marketPrice": "199", "isVoucher": "0", "quantity": 1},
      { "shopId": "2", "storeName": "千库时尚服装店", "storeLogo": "/images/shop/storeLogo.png", "shopName": "初秋洋气格子衬衫", "shopUrl": "/images/shop/2.jpg", "shopColor": "图片色", "reducePrice": "0", "salesPrice": "60", "marketPrice": "99", "isVoucher": "0", "quantity": 1 }
    ],
    shopNum: 1,
    selectedAll: false,// 全选按钮标志位
    totalPrice: 0, // 总金额
    selectArr: []
  },
  goShopping(){
    wx.switchTab({
      url: '../home/home',
    });
  },
  // 进入详情
  goShopDetail() {
    wx.navigateTo({
      url: './shopDetail/shopDetail'
    })
  },
  loadOrders(){
    var shoppingList = this.data.shoppingList;
    var totalPrice = 0;
    var newOrders = [];
    var selectedAll = true;
    for(var i=0;i<shoppingList.length;i++){
      var order = shoppingList[i];
      if(order.selected){
        totalPrice += order.salesPrice * order.quantity;
      } else {
        selectedAll = false;
      }
      newOrders.push(order);
    }
    this.setData({
      totalPrice,
      shoppingList: newOrders,
      selectedAll
    })
    console.log(this.data.selectedAll)
  },
  checkboxChange(e){
    var ids = e.detail.value;
    var shoppingList = this.data.shoppingList;
    var totalPrice = 0;
    var newOrders = [];
    for (var i = 0; i < shoppingList.length;i++){
      var order = shoppingList[i];
      var flag = true;
      for(var j=0;j<ids.length;j++){
        console.log(ids, order)
        if(order.shopId == ids[j]){
          totalPrice += order.salesPrice*order.quantity;
          order.selected = true;  // 代表该件商品是选中状态
          flag = false; // 代表该件商品是选中状态
        }
      }
      if(flag){
        order.selected = false;
      }
      newOrders.push(order);
      this.loadOrders();
    }
  },
  // 全选
  checkAll() {
    var shopList = this.data.shoppingList;
    var selectedAll = this.data.selectedAll;
    var newOrders = [];
    console.log('selectedAll', selectedAll, shopList)
    shopList.forEach((v, ind) => {
      console.log(v, ind)
      if(selectedAll){
        v.selected = false;
      } else {
        v.selected = true;
      }
      newOrders.push(v);
    })
    this.setData({
      shoppingList: newOrders
    })
    console.log(newOrders)
    this.loadOrders();
  },
  //添加商品
  addOrders(e){
    var id = e.currentTarget.dataset.shopid;
    var orders = this.data.shoppingList;
    var addOrders = new Array();
    orders.forEach((v,ind)=>{
      if(v.shopId == id){
        var quantity = v.quantity;
        v.quantity = quantity + 1;
      }
      addOrders[ind] = v;
    })
    this.setData({
      shoppingList: addOrders
    })
    this.loadOrders();
  },
  // 减少商品
  minusOrders(e) {
    var id = e.currentTarget.dataset.shopid;
    var orders = this.data.shoppingList;
    var addOrders = new Array();
    orders.forEach((v, ind) => {
      if (v.shopId == id) {
        var quantity = v.quantity;
        if(quantity>=2){
          v.quantity = quantity-1;
        }
      }
      addOrders[ind] = v;
    })
    this.setData({
      shoppingList: addOrders
    })
    this.loadOrders();
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