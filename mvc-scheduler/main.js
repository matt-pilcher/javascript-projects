// It should have a place to store items
var list = ['item 1','item 2', 'item 3', 'item 4'];

// It should have a way to display a list
function displayList() {
  console.log('My List: ', list);
}

//It should have a way to add an item
function addItem(item) {
  list.push(item);
  displayList();
}

// It should have a way to change an item
function changeItem(pos, newVal) {
  list[pos] = newVal;
  displayList();
}

// It should have a way to delete an item
function deleteItem(pos) {
  list.splice(pos, 1);
  displayList();
}


