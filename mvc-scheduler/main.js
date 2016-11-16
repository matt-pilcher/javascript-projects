
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
    else {
      // Make them true
    }
    
  }
};
// It should have a place to store items

// It should have a way to display a list

//It should have a way to add an item

// It should have a way to change an item

// It should have a way to delete an item

