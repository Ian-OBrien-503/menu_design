// Create a new list item when clicking on the "Add" button function newElement() {
  var h2 = document.createElement("li");

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


  h2.appendChild(addItem);
  document.getElementById("menu").appendchild(h2);
  if (type === '') {
    alert("You must specify section to add to menu!");
  } 
  if (type == "specials"){h2.appendChild(addItem)}
  if (type == "entrees"){}
  if (type == "sides"){}
  if (type == "beverages") {}
  else {alert("specify valid type/section to add to menu")}
  document.getElementById("type").value = "";
  document.getElementById("item").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";




  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
