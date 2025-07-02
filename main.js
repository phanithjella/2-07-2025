const form = document.getElementById("todo");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
  }
});








/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="clickme">Click Me</button>
    <div id="box" style="width:100px; height:100px; background-color: aqua;">
    <button id="doubleclickme">Double Click me</button></div>
    
    
    <script>
    document.getElementById("clickme").addEventListener("click",function(){
        alert("Button was clicked");
    });
    let a = document.getElementById("box");
    a.addEventListener("dblclick",function(){
        a.style.backgroundColor="lightblue";
        a.innerHTML="Double Clicked!";
        a.style.backgroundColor==="lightblue"?"lightcoral":"lightblue";
    });
    document.getElementById("doubleclickme").addEventListener("dblclick",function(){
        alert("Button was double clicked!");
    });
    </script>
</body>
</html>

*/
