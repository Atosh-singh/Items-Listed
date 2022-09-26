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

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);

// console.log(items[1]);
// items[1].textContent = "New Item";
// //items[1].style.fontWeight = "bold";

// items[3].style.backgroundColor = "lightgreen";

// var list = document.getElementsByClassName("list-group-item");
// console.log(list);
// //list.style.fontWeight = "bold";

// for (var i = 0; i < list.length; i++) {
//   list[i].style.fontWeight = "bold";
// }

// console.log("Learn GIt commit again");

// GETELEMENTBYTAGNAME //

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// //li[1].textContent = "hello2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "Yellow";

// // GIVES Error
// // items.style.backgroundColor = '#f4f4f4'

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f5f5f5";
// }

// QUERYSELECTOR //

// var header = document.querySelector("#main-header");
// //console.log(header);
// header.style.border = " solid 4px #CCC";

// var input = document.querySelector("input");
// input.value = "add  Items";

// var submit = document.querySelector("input[type=submit]");
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// // thirdItem.style.visibility = "hidden";

// QUERYSELECTORALL //

var titles = document.querySelectorAll(".title");
console.log(titles);

var secondItem = document.querySelectorAll("li:nth-child(2)");

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "#ccc";
}
