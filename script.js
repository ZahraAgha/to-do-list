let formInput = document.querySelector("#txtTaskName");
let addButton = document.querySelector("#btnAddNewTask");
let ulList = document.querySelector("#task-list");
let btnDeleteAll = document.querySelector("#btnDeleteAll")




ulList.addEventListener("click", deleteItem)

addButton.addEventListener("click", addItem)

btnDeleteAll.addEventListener("click", deleteItemAll)

function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        if (confirm("Are u sure ?")) {
            e.target.parentElement.parentElement.remove();

        }
    }

}

function addItem(e) {
    if (formInput.value) {
        let liText = formInput.value;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(liText));// ??
        li.classList = "list-group-item list-group-item-secondary"
        let a = document.createElement("a");
        a.classList = "delete-item float-end"
        a.setAttribute("href", "#")
        a.innerHTML = '<i class="fas fa-times"></i>'
        li.appendChild(a);
        ulList.appendChild(li)
        e.preventDefault()
    } else {
        alert("You should fill!")
    }
}

function deleteItemAll() {
    ulList.innerHTML = ""
}
