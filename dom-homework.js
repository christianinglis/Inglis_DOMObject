var myDiv = document.getElementById("myDiv");

var heading = document.createElement("h1");
heading.innerHTML = "Welcome to DOM Homework";
heading.classList.add("highlight");
myDiv.appendChild(heading);

var paragraph = document.createElement("p");
paragraph.innerHTML = "This is your first DOM Homework assignment";
myDiv.appendChild(paragraph);