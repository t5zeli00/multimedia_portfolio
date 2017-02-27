document.addEventListener('DOMContentLoaded', function(event){
  app.view = new App.View(document.getElementById('name-list'));
  app.nameList = new App.NameList();
  app.nameList.loadNames();
  app.controller = new App.Controller(app.nameList, app.view);
  app.view.controller = app.controller;
  app.controller.renderView();
});

