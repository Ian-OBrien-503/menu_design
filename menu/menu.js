function newMenuItem()
{
// Create a new list item when clicking on the "Add" button function newElement() {
  var x = document.createElement("h2");
  var y = document.createElement("h2");
  var z = document.createElement("h2");
  var split = document.createElement("hr");
  

// get data from the form 
  var type = document.getElementById("type").value;
  var item = document.getElementById("item").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
// create new nodes for html doc from form data 
  var addType = document.createTextNode(type);
  var addItem = document.createTextNode(item);
  var addDescription = document.createTextNode(description);
  var addPrice = document.createTextNode(price);

// add data to the menu
  x.appendChild(addItem);
  y.appendChild(addDescription);
  z.appendChild(addPrice);
  if (type === '') {
    alert("You must specify section to add to menu!");
  }
  if (type == "specials"){ 
    document.getElementById("specials").appendChild(x);
    document.getElementById("specials").appendChild(y);
    document.getElementById("specials").appendChild(z);
    document.getElementById("specials").appendChild(z);
    document.getElementById("specials").appendChild(split);
  }
  if (type == "entrees"){ 
    document.getElementById("entrees").appendChild(x);
    document.getElementById("entrees").appendChild(y);
    document.getElementById("entrees").appendChild(z);
    document.getElementById("enetrees").appendChild(split);
  }
  if (type == "sides"){ 
    document.getElementById("sides").appendChild(x);
    document.getElementById("sides").appendChild(y);
    document.getElementById("sides").appendChild(z); 
    document.getElementById("sides").appendChild(split);
  }
  if (type == "beverages") { 
    document.getElementById("beverages").appendChild(x);
    document.getElementById("beverages").appendChild(y);
    document.getElementById("beverages").appendChild(z);
    document.getElementById("beverages").appendChild(split);
  }
  document.getElementById("type").value = "";
  document.getElementById("item").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
}
