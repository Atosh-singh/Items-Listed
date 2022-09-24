// EXAMINE THE DOCUMENT OBJECT

//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// //document.title = "Hi Everybody";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[18]);

// //document.all[10].textContent = "Hello";

// console.log(document.forms);
// console.log(document.links);

//console.log(document.images);

//GETELEMENTBYID //

//console.log(document.getElementById("header-title"));

//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
// headerTitle.textContent = "Item Lister2";
// headerTitle.innerText = "Item lister4";
//console.log(headerTitle);
//headerTitle.innerHTML = "<h3>Hello</h3>";

//header.style.borderBottom = "solid 4px #000";
//headerTitle.textContent = "Chal rha h ";

//GETELEMENTSBYCLASSNAME//

var items = document.getElementsByClassName("list-group-item");
console.log(items);

console.log(items[1]);
items[1].textContent = "New Item";
//items[1].style.fontWeight = "bold";

items[3].style.backgroundColor = "lightgreen";

var list = document.getElementsByClassName("list-group-item");
console.log(list);
//list.style.fontWeight = "bold";

for (var i = 0; i < list.length; i++) {
  list[i].style.fontWeight = "bold";
}
