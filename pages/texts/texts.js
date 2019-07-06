Page({
data: {
  TodayList: [],
    Today: "",
      input: ""
},
/**
 * 存储列表数据函数
 */
save: function() {
  wx.setStorageSync('TodayList', this.data.TodayList);
},
loadData: function() {
  var todo = wx.getStorageSync('TodayList');
  if (todo) {
    this.setData({
      TodayList: todo
    });
  }

},
AddInput: function(e) {
  this.setData({
    input: e.detail.value
  });
},
/**
 * 更改任务状态
 * */
toggleTodoHandle: function (e) {
  var todo = this.data.TodayList;
  var index = e.currentTarget.id;
  todo[index].completed = !todo[index].completed;
  this.setData({
    TodayList: todo
  });
  this.save();
},
/**
 */
AddConfirm: function(e) {
  var that = this;
  var todo = this.data.TodayList;
  todo.push({ description: this.data.input, completed: false })
  that.setData({ TodayList: todo, input: '' });
  console.log(this.data.TodayList)
  this.save();
},
/**
 * 删除
 */
removeTodoHandle: function(e) {
  var todo = this.data.TodayList;
  var index = e.currentTarget.id;
  todo.splice(index, 1);
  console.log(todo);
  //设置数据
  this.setData({
    TodayList: todo
  });
  this.save();
},

})