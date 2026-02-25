var myDiv = document.getElementById("myDiv");

var heading = document.createElement("h1");
heading.innerHTML = "Welcome to DOM Homework";
heading.classList.add("highlight");
myDiv.appendChild(heading);