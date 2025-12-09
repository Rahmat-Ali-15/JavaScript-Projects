// // let str = JSON.parse(localStorage.getItem("data")) || [];

// let str = [];
// let count = 0;

// const todo = () => {
//   let addBtn = document.querySelector(".add-btn");
//   let todoInput = document.querySelector(".todo-input").value;
//   console.log("🚀 ~ todoInput:", todoInput);
// //   if(todoInput.trim() === ""){
// //     alert("Input dal re!!")
// //     return
// //   }

//   let todoData = {
//     id: count + 1,
//     text: todoInput,
//   };
//   count++;
//   str.push(todoData);
//   todoList()
//   console.log("🚀 ~ todoData:", todoData);
//   console.log("🚀 ~ str:", str);
// };
// // todo();

// const todoList = () => {
//   let todoListContainer = document.querySelector(".todo-list");

//   str.map((el) => {
//     // let div = document.createElement("div");
//     let text = document.createElement("p");

//     text.innerText = el.text;

//     // div.append(text);
//     todoListContainer.append(text);
//   });
// };

// let todoStorage = JSON.parse(localStorage.getItem("todoData")) || [];

let todoStorage = JSON.parse(localStorage.getItem("todoData"));

if (!Array.isArray(todoStorage)) {
  todoStorage = [];
}

console.log("🚀 ~ todoStorage:", todoStorage);
// let count = 0;

const addTodo = () => {
  let todoInput = document.querySelector(".todo-input");
  let todoInputVal = todoInput.value;

  if (todoInput.value.trim() === "") {
    alert("Please enter the task");
    return;
  }

  let todoObj = {
    id: Date.now(),
    text: todoInputVal,
    isEdited: false,
    isCompleted: false,
  };
  // count++;

  todoStorage.push(todoObj);
  localStorage.setItem("todoData", JSON.stringify(todoStorage));
  todoList();

  console.log("🚀 ~ todoStorage:", todoStorage);

  todoInput.value = "";
};

const todoList = () => {
  let listContainer = document.querySelector(".list-container");
  listContainer.innerHTML = "";

  todoStorage.map((el) => {
    let mainDiv = document.createElement("div");
    mainDiv.className = "list-content";

    let todoId = document.createElement("p");
    todoId.innerText = el.id;

    let todoText = document.createElement("p");
    todoText.innerText = el.text;

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // Edit logic
    editBtn.addEventListener("click", () => {
      let editItem = todoStorage.map((item) =>
        el.id === item.id ? { ...item, isEdited: !item.isEdited } : item
      );
      todoStorage = editItem;
      localStorage.setItem("todoData", JSON.stringify(todoStorage));
      todoList();
      console.log("🚀 ~ editItem:", editItem);
    });

    // Delete logic
    deleteBtn.addEventListener("click", () => {
      let deleteItem = todoStorage.filter((dl) => el.id !== dl.id);
      todoStorage = deleteItem;
      localStorage.setItem("todoData", JSON.stringify(todoStorage));
      todoList();
    });

    let cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Cancel";

    let confirmBtn = document.createElement("button");
    confirmBtn.innerText = "Confirm";

    if (el.isEdited) {
      editBtn.style.display = "none";
      deleteBtn.style.display = "none";
      cancelBtn.style.display = "inline-block";
      confirmBtn.style.display = "inline-block";
    } else {
      cancelBtn.style.display = "none";
      confirmBtn.style.display = "none";
    }

    // cancel logic
    cancelBtn.addEventListener("click", () => {
      let cancelItem = todoStorage.map((cl) =>
        el.id === cl.id ? { ...cl, isEdited: !cl.isEdited } : cl
      );
      todoStorage = cancelItem;
      localStorage.setItem("todoData", JSON.stringify(todoStorage));
      todoList();
    });

    buttonDiv.append(editBtn, deleteBtn, cancelBtn, confirmBtn);

    mainDiv.append(todoId, todoText, buttonDiv);
    listContainer.append(mainDiv);
  });
};
