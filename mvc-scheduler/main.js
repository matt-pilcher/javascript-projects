
// This object handles the methods for the functionality of the app
var itinerary = {
  list: [],
  
  addItem: function(item) {
    this.list.push({
      item: item,
      completed: false
    });
  },
  
  changeItem: function(pos, newItem) {
    this.list[pos].item = newItem;
  },
  
  deleteItem: function(pos) {
    this.list.splice(pos, 1);
  },
  
  toggleCheckbox: function(pos) {
    var item = this.list[pos];
    item.completed = !item.completed;
  },
  
  toggleAll: function() {
    var totalItems = this.list.length;
    var completedItems = 0;
    
    for (var i = 0; i < totalItems; i++) {
      if(this.list[i].completed === true) {
        completedItems++;
      }
    }
    
    // If all items are true, make them false
    if (completedItems === totalItems) {
      for (var i = 0; i < totalItems; i++) {
        this.list[i].completed = false;
      }
    }
    
    // If false, make them true
    else { 
      for (var i = 0; i < totalItems; i++) {
        this.list[i].completed = true;
      }
      
    }
  }
};

// This object controls the event handlers for user interaction
var events = {
  addItem: function() {
    var userItem = document.getElementById('userItem');
    itinerary.addItem(userItem.value);
    userItem.value = '';
    view.displayList();
  },
  
  changeItem: function() {
    var itemPos = document.getElementById('changeItemPosInput');
    var changeItem = document.getElementById('changeItemInput');
    
    itinerary.changeItem(itemPos.valueAsNumber, changeItem.value);
    
    itemPos.value = '';
    changeItem.value = '';
    view.displayList();
  },
  
  deleteItem: function() {
    var deleteItem = document.getElementById('deleteItemInput');
    itinerary.deleteItem(deleteItem.valueAsNumber);
    deleteItem.value = '';
    view.displayList();
  },
  
  toggleItem: function() {
    var toggleItem = document.getElementById('toggleItemInput');
    itinerary.toggleCheckbox(toggleItem.valueAsNumber);
    toggleItem.value = '';
    view.displayList();
  },
  
  toggleList: function() {
    itinerary.toggleAll();
    view.displayList();
  }
};

// This object handles displaying output to the DOM
var view = {
  displayList: function() {
    var listUl = document.querySelector('ul');
    listUl.innerHTML = '';
    
    for (var i = 0; i < itinerary.list.length; i++) {
      var listLi = document.createElement('li');
      var listItem = itinerary.list[i];
      var itemStatus = '';
      
      if (listItem.completed === true) {
        itemStatus = '(x) ' + listItem.item;
      } 
      else {
        itemStatus = '( ) ' + listItem.item;
      }
      
      listLi.textContent = itemStatus;
      listUl.appendChild(listLi);
    }
  }
};