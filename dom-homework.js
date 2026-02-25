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
li1.innerHTML = "Item 1";

var li2 = document.createElement("li")
li2.innerHTML = "Item 2";

var li3 = document.createElement("li")
li3.innerHTML = "Item 3";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

myDiv.appendChild(ul);

var newItemCounter = 0;

var button = document.createElement("button")
button.innerHTML = "Click Me";
myDiv.appendChild(button);


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}


button.addEventListener("click", function() {
    newItemCounter = ul.children.length
    newItemCounter++;

    var newlist = document.createElement("li")
    newlist.textContent = "Item " + newItemCounter;
    newlist.style.color = getRandomColor()

    ul.appendChild(newlist);
});

myDiv.addEventListener("click", function() {
    myDiv.style.backgroundColor = getRandomColor();
});