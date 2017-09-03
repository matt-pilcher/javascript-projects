var itinerary = {
  list: [],
  
  displayList: function() {
    if (this.list.length === 0) {
      console.log('No tasks scheduled for today');
    } else {
      console.log('Itinerary: ');
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].completed === true) {
          console.log('(x)', this.list[i].item);
        } else { 
          console.log('( )',this.list[i].item);
        }
      }
    }
  },
  
  addItem: function(item) {
    this.list.push({
      item: item,
      completed: false
    });
    this.displayList();
  },
  
  changeItem: function(pos, newItem) {
    this.list[pos].item = newItem;
    this.displayList();
  },
  
  deleteItem: function(pos) {
    this.list.splice(pos, 1);
    this.displayList();
  },
  
  toggleCheckbox: function(pos) {
    var item = this.list[pos];
    item.completed = !item.completed;
    this.displayList();
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
    this.displayList();
  }
};

var events = {
  displayList: function() {
    itinerary.displayList();
  },
  addItem: function() {
    var userItem = document.getElementById('userItem');
    itinerary.addItem(userItem.value);
    userItem.value = '';
  },
  changeItem: function() {
    var itemPos = document.getElementById('changeItemPosInput');
    var changeItem = document.getElementById('changeItemInput');
    
    itinerary.changeItem(itemPos.valueAsNumber, changeItem.value);
    
    itemPos='';
    changeItem='';
  },
  deleteItem: function() {
    var deleteItem = document.getElementById('deleteItemInput');
    itinerary.deleteItem(deleteItem.valueAsNumber);
    deleteItem = '';
  },
  toggleItem: function() {
    var toggleItem = document.getElementById('toggleItemInput');
    itinerary.toggleCheckbox(toggleItem.valueAsNumber);
    toggleItem = '';
  },
  toggleList: function() {
    itinerary.toggleAll();
  }
};

/* Old code after refactoring event handlers

var displayListButton = document.getElementById('displayListButton');

displayListButton.addEventListener('click', function() {
  itinerary.displayList();
});

var toggleListButton = document.getElementById('toggleListButton');

toggleListButton.addEventListener('click', function () {
  itinerary.toggleAll();
});

*/