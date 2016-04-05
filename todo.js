// To-Do List

var body = document.getElementsByTagName("body")[0];
body.style.textAlign = "center";
body.innerHTML = "<h1 style='text-decoration:underline'>My List</h1><ul></ul>";

function addItem(item) {
  document.getElementsByTagName("ul")[0].innerHTML += "<li>" + item + "</li><br/>";
}

function deleteItem(item) {
  for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
    if (item == document.getElementsByTagName("li")[i].innerHTML) {
      document.getElementsByTagName("li")[i].style.display = "none";
    }
  }
}

document.getElementsByTagName("ul")[0].style.display = "none";

function viewList() {
  document.getElementsByTagName("ul")[0].style.display = "initial";
}

addItem("finish project");
addItem("return some video tapes");
addItem("shopping");

deleteItem("shopping");

viewList();