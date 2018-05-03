//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello！',
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    focus: false,
    inputValue: '',
    userN: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
     
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe: function() {
    if (this.userN == "吉雅") {
      this.setData({ msg: "你是苏伦的媳妇" })
    } else {
      this.setData({ msg: this.userN + "，我不认识你" })
    }
  },
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
      
    })
  },
  submit: function() {
    if (this.data.userN =="" || this.data.userN == null) {
      return
    }
    if (this.data.userN == "吉雅"||this.data.userN == "吉小雅") {
      this.setData({ msg: this.data.userN + "，你是苏伦的媳妇" })
    } else if (this.data.userN == "小熊猫") {
      this.setData({ msg: this.data.userN + "，你是苏伦的宝贝" })
    } else if (this.data.userN == "苏伦") {
      this.setData({ msg: this.data.userN + "，你是我自己" })
    } else if (this.data.userN == "大帅逼") {
      this.setData({ msg: this.data.userN + "，你是我自己" })
    } else {
      this.setData({ msg: this.data.userN + "，我不认识你" })
    }

  }
})
