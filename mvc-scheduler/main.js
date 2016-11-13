
var itinerary = {
  list: ['item 1','item 2', 'item 3', 'item 4'],
  
  displayList: function() {
    console.log('My List: ', this.list);
  },
  
  addItem: function(item) {
    this.list.push(item);
    this.displayList();
  },
  
  changeItem: function(pos, newVal) {
    this.list[pos] = newVal;
    this.displayList();
  },
  
  deleteItem: function(pos) {
    this.list.splice(pos, 1);
    this.displayList();
  }
};
// It should have a place to store items

// It should have a way to display a list

//It should have a way to add an item

// It should have a way to change an item

// It should have a way to delete an item
