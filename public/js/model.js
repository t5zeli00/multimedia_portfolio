App.NameList = function NameList(){
  this.loadNames();
};

App.NameList.prototype.addName = function (name) {
  this.names.push(name);
  app.storage.saveList(this);
};

App.NameList.prototype.loadNames = function() {
  var stored = app.storage.retrieveList();
  if (stored) {
    this.names = stored.names;
  } else {
    this.names = [];
  }
}

App.Name = function Name(args) {
  this.nameName = args.nameName || '';
};
