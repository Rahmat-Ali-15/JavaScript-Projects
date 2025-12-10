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

// let pinTask = JSON.parse(localStorage.getItem("pinTask")) || [];

console.log("🚀 ~ todoStorage:", todoStorage);
let count = 1;

let todoInput = document.querySelector(".todo-input");

const addTodo = () => {
  let todoInputVal = todoInput.value;

  if (todoInput.value.trim() === "") {
    alert("Please enter the task");
    return;
  }

  let todoObj = {
    id: count,
    text: todoInputVal,
    isEdited: false,
    isCompleted: false,
  };
  count++;

  todoStorage.push(todoObj);
  localStorage.setItem("todoData", JSON.stringify(todoStorage));
  todoList();

  console.log("🚀 ~ todoStorage:", todoStorage);

  todoInput.value = "";

};

// Press Enter key to add Todo Task
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

const todoList = () => {
  let listContainer = document.querySelector(".list-container");
  listContainer.innerHTML = "";

  todoStorage.map((el) => {
    let mainDiv = document.createElement("div");
    mainDiv.className = "list-content";

    let checkBoxIdDiv = document.createElement("div");
    checkBoxIdDiv.className = "checkBox-id-div";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = el.isCompleted;

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

    let editInput = document.createElement("input");
    editInput.value = el.text;

    // chckbox logic
    checkBox.addEventListener("change", () => {
      let checkBoxItem = todoStorage.map((ch) =>
        el.id === ch.id ? { ...ch, isCompleted: checkBox.checked } : ch
      );
      todoStorage = checkBoxItem;
      localStorage.setItem("todoData", JSON.stringify(todoStorage));
      todoList();
    });

    //  checkBox.addEventListener("change", () => {
    //   let clickedItem;

    //   todoStorage = todoStorage.filter((item) => {
    //     if (item.id === el.id) {
    //       clickedItem = {
    //         ...item,
    //         isCompleted: checkBox.checked,
    //       };
    //       return false;
    //     }
    //     return true;
    //   });

    //   if (checkBox.checked) {
    //     todoStorage.unshift(clickedItem); // ✅ TOP
    //   } else {
    //     todoStorage.push(clickedItem); // ✅ BOTTOM
    //   }

    //   localStorage.setItem("todoData", JSON.stringify(todoStorage));
    //   todoList();
    // });

    // Edit logic
    editBtn.addEventListener("click", () => {
      let editItem = todoStorage.map((item) =>
        el.id === item.id ? { ...item, isEdited: !item.isEdited } : item
      );
      todoStorage = editItem;
      localStorage.setItem("todoData", JSON.stringify(todoStorage));
      todoList();
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

    // cancel logic
    cancelBtn.addEventListener("click", () => {
      let cancelItem = todoStorage.map((cl) =>
        el.id === cl.id ? { ...cl, isEdited: !cl.isEdited } : cl
      );
      todoStorage = cancelItem;
      localStorage.setItem("todoData", JSON.stringify(todoStorage));
      todoList();
    });

    // confirm logic
    confirmBtn.addEventListener("click", () => {
      let confirmItem = todoStorage.map((cf) =>
        el.id === cf.id ? { ...cf, text: editInput.value, isEdited: false } : cf
      );
      todoStorage = confirmItem;
      localStorage.setItem("todoData", JSON.stringify(todoStorage));
      todoList();
    });

    if (el.isEdited) {
      editBtn.style.display = "none";
      deleteBtn.style.display = "none";
      cancelBtn.style.display = "inline-block";
      confirmBtn.style.display = "inline-block";
      todoText.style.display = "none";
      editInput.style.display = "inline-block";
    } else {
      cancelBtn.style.display = "none";
      confirmBtn.style.display = "none";
      todoText.style.display = "inline-block";
      editInput.style.display = "none";
    }

    if (el.isCompleted) {
      todoText.style.textDecoration = "line-through";
      editBtn.style.textDecoration = "line-through";
      deleteBtn.style.textDecoration = "line-through";
      todoId.style.textDecoration = "line-through";
      editBtn.disabled = true;
      editBtn.style.cursor = "not-allowed";
    } else {
      todoText.style.textDecoration = "none";
      editBtn.style.textDecoration = "none";
      deleteBtn.style.textDecoration = "none";
      todoId.style.textDecoration = "none";
    }

    // Appending data on the UI
    checkBoxIdDiv.append(checkBox, todoId);
    buttonDiv.append(editBtn, deleteBtn, cancelBtn, confirmBtn);

    mainDiv.append(checkBoxIdDiv, todoText, editInput, buttonDiv);
    listContainer.append(mainDiv);
  });
};

// const pinnedList = () => {
//   let pinContainer = document.querySelector(".pin-container");
//   pinContainer.innerHTML = "";

//   pinTask.forEach((el) => {
//     let p = document.createElement("p");
//     let  = document.createElement("p");
//     p.innerText = el.text;
//     pinContainer.append(p);
//   });
// };
