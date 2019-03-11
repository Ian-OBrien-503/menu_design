// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");

// ADDED TO BUILD MENU 
  var type = document.getElementById("type").value;
  var item = document.getElementById("item").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
// ADDED TO BUILD MENU
  var addType = document.createTextNode(type);
  var addItem = document.createTextNode(item);
  var addDescription = document.createTextNode(description);
  var addPrice = document.createTextNode(price);


  h1.appendChild(addItem);
  document.getElementById("menu").appendchild(li);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
