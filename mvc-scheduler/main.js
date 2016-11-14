
var itinerary = {
  list: [],
  
  displayList: function() {
    console.log('My List: ', this.list);
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
  }
};
// It should have a place to store items

// It should have a way to display a list

//It should have a way to add an item

// It should have a way to change an item

// It should have a way to delete an item

