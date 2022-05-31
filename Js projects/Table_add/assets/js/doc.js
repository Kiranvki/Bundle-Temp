var id = null;

function onFormSubmit() {
    event.preventDefault();
    var name = document.getElementById("fname").value;
    var msg = document.getElementById("msg");
    var mob = document.getElementById("lname").value;
    var regex = /^[a-z]([-']?[a-z]+)*/;

    if (name === "") {
        msg.innerText = "Please Enter Your Full Name";
        msg.style.color = "Red";
        return;
    }
    if (regex.test(name) === false) {
        msg.innerText = "Please enter the valid name:";
        msg.style.color = "Red";
    } else {
        let formData = readData();
        if (id == null) {
            insertData(formData);
            onReset();
        } else {
            onUpdate(formData);
            onReset();
        }
    }
}

function readData() {
    var formData = {};
    formData['fname'] = document.getElementById("fname").value;
    formData['lname'] = document.getElementById("lname").value;
    formData['age'] = document.getElementById("age").value;
    return formData;
}

function insertData(data) {
    var no = 1;
    var table = document.getElementById("store_list").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button>`
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="onDelete(this)" id="btn2">Delete</button>`
}

function onEdit(td) {
    id = td.parentElement.parentElement;
    document.getElementById("fname").value = id.cells[0].innerHTML;
    id = td.parentElement.parentElement;
    document.getElementById("lname").value = id.cells[1].innerHTML;
    id = td.parentElement.parentElement;
    document.getElementById("age").value = id.cells[2].innerHTML;
}

function onUpdate(formData) {
    id.cells[0].innerHTML = formData.fname;
    id.cells[1].innerHTML = formData.lname;
    id.cells[2].innerHTML = formData.age;
}

function onDelete(td) {
    if (confirm("Do you want to delete this record ?")) {
        var row = td.parentElement.parentElement;
        document.getElementById("store_list").deleteRow(row.rowIndex);
    }
    onReset();
}

function onReset() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
}