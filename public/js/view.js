App.View = function View(element) {
  this.element = element;
  this.addEventListeners();
};

App.View.prototype.addEventListeners = function() {
    var form = document.getElementById('new_name_form');

    var handleSubmit = function(event) {
      event.preventDefault();
      var name = document.getElementById('name_name').value;
      this.controller.addName({nameName: name});
    };  

    form.addEventListener('submit', handleSubmit.bind(this));

};

App.View.prototype.drawList = function(nameList) {
  var html = '';
   if (nameList.names) {
      for (var i = 0; i < nameList.names.length; i++) {
        var name = nameList.names[i];
        html += '<li><span class="name-name">';
        html += name.nameName;
        html += '</span>';   
      }
   }
   this.element.innerHTML = html;
};

