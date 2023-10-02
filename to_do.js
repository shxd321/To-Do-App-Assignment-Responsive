const inpt = document.querySelector(".text-field");
const btn = document.querySelector("#my-button-1");
const list = document.querySelector(".list");
const validator = document.querySelector(".validator");

function add() {
  if (inpt.value !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<div> <span>${inpt.value}</span> 
    <button onclick="edit(this)" type="button" class="edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button></div>
    <button class='remove' type="button" onclick = "remove(this)"><i class="fa-solid fa-trash"></i> Remove</buttton>`;
    list.appendChild(li);
    inpt.value = "";
    validator.textContent = "";
  } else {
    // validator.textContent = "Put some value";
    inpt.style.borderColor = "red";
  }
}

function remove(itemCurrent) {
  itemCurrent.previousElementSibling.parentNode.remove();
}
function clearAll() {
  if (list.childElementCount === 0) {
    validator.textContent = "The List is Empty";
    validator.style.color = "red";
  } else {
    list.innerHTML = "";
  }
}

function edit(item) {
  if (item.textContent === "Done") {
    const todoName = item.previousElementSibling.value;
    let span = document.createElement("span");
    span.textContent = todoName;
    item.parentElement.replaceChild(span, item.previousElementSibling);
    item.textContent = "Edit";
    span.style.border = "1px solid black";
    span.style.color = "black";
    span.style.borderRadius = "6px";
    span.style.padding = "10px";
    alert("Cahnged");
    // span.style.width = "100px";
  } else {
    const todoName = item.previousElementSibling.textContent;
    console.log(todoName);
    item.textContent = "Done";
    let input = document.createElement("input");
    input.type = "text";
    input.value = todoName;
    item.parentElement.replaceChild(input, item.previousElementSibling);
    input.style.border = "1px solid black";
    input.style.color = "black";
    input.style.padding = "10px";
  }
}
