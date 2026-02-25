var myDiv = document.getElementById("myDiv");

var heading = document.createElement("h1");
heading.innerHTML = "Welcome to DOM Homework";
heading.classList.add("highlight");
myDiv.appendChild(heading);

var paragraph = document.createElement("p");
paragraph.innerHTML = "This is your first DOM Homework assignment";
myDiv.appendChild(paragraph);

var ul = document.createElement("ul");

var li1 = document.createElement("li")
li1.innerHTML = "Item One";

var li2 = document.createElement("li")
li2.innerHTML = "Item Two";

var li3 = document.createElement("li")
li3.innerHTML = "Item Three";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

myDiv.appendChild(ul);

var newItemCounter = 0;

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

var button = document.getElementById("addItemButton");

button.addEventListener("click", function() {

    newItemCount++;

    var newL1 = document.createElement("l1");
    newL1.innerHTML = "New List Item " + newItemCount;

    newL1.style.color = getRandomColor();

    ul.appendChild(newL1);
});

myDiv.addEventListener("click", function() {
    myDiv.style.backgroundColor = getRandomColor();
});