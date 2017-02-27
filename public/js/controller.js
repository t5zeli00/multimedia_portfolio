App.Controller = function Controller(nameList, view) {
  this.nameList = nameList;
  this.view = view;
};

App.Controller.prototype.renderView = function() {
  this.view.drawList(this.nameList);
}

App.Controller.prototype.addName = function(args) {
  var n = new App.Name(args);
  this.nameList.addName(n);
  this.renderView();
};

