window.onload = function() {

  	var container = document.getElementById("tabContainer"),
		    tabcon = document.getElementById("tabscontent"),
        navitem = document.getElementById("tabHeader_1");
		
    // Store current tab
    var selected = navitem.id.split("_")[1];
    navitem.parentNode.setAttribute("data-current", selected);
    navitem.setAttribute("class", "tabActiveHeader");

    // Hide other tabs
   	var pages = tabcon.getElementsByTagName("div"); 
    for (var i = 1; i < pages.length; i++) { 
      pages.item(i).style.display = "none";
		}

    // Display tab after clicking
    var tabs = container.getElementsByTagName("li");
    for (var i = 0; i < tabs.length; i++) { 
      tabs[i].onclick = displayPage;
    }
};

// Starts after clicking a tab
function displayPage() {
  var current = this.parentNode.getAttribute("data-current");

  // Remove activetabheader and hide tab
  document.getElementById("tabHeader_" + current).removeAttribute("class");
  document.getElementById("tabpage_" + current).style.display = "none";
  
  var selected = this.id.split("_")[1];

  // Assign activeTabHeader and display content
  this.setAttribute("class", "tabActiveHeader");
  document.getElementById("tabpage_" + selected).style.display = "block";
  this.parentNode.setAttribute("data-current", selected);
}