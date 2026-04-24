// let form = document.getElementById("form")
// let allTasks = []

// const validateForm = (event) => {
//     event.preventDefault()

//     let userInput = event.target.userinput

//     allTasks.push(userInput.value);

//     let display = document.getElementById("display")

//     display.innerHTML = ""
//     allTasks.forEach((task, index) => 
//         display.innerHTML += `<li>${task}</li> 
//         <button onclick = "deleteTask(${index})"> Delete</button>`
//     );
//     userInput.value = ""
    
// };

// const deleteTask = (index) => {
//     allTasks.splice(index,1)

//     let display = document.getElementById("display")
//     display.innerHTML = ""
    
//     allTasks.forEach((task,i) =>
//         display.innerHTML += `<li>${task}</li>
//         <button onclick = "deleteTask(${i})">Delete</button>`
//     );
// }
// form.addEventListener('submit', validateForm)



function Add() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    document.getElementById("display").innerText = v1 + v2;
}

function Sub() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    document.getElementById("display").innerText = v1 - v2;
}

function Mul() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    document.getElementById("display").innerText = v1 * v2;
}

function Div() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    if (v2 === 0) {
        document.getElementById("display").innerText = "Cannot divide by zero";
    } else {
        document.getElementById("display").innerText = v1 / v2;
    }
}