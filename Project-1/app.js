// Storing all task
let allUnpinTask = [];
let allPinTask = [];

let idCount = 1;

// Adding task
const addTask = () => {
    let textInput = document.querySelector(".text-input");
    let taskBtn = document.querySelector(".task-btn");

    if(textInput.value.trim()==="") return;
    
    const dataObj = {
        id : idCount,
        text : textInput.value,
        isPinned : false
    }
    idCount++;

    allUnpinTask.push(dataObj);
    textInput.value = "";
    // appendTask(allPinTask)
    appendTask(allUnpinTask);
    
    console.log(allUnpinTask)
}

// Appending task
const appendTask = (dataObj) => {
    let taskContent = document.querySelector(".task-content");
    taskContent.innerHTML = "";

    dataObj.forEach((el)=> {
        let mainDiv = document.createElement("div");
        mainDiv.className = "mainDiv"

        let id = document.createElement("p");
        id.innerText = el.id;
        
        let text = document.createElement("p");
        text.innerText = el.text;

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox"
        
        
        // isPinned logic

        checkBox.addEventListener("click", ()=> {
            // allUnpinTask = allUnpinTask.filter((dl)=> dl.id !== el.id);

            // let delitem = allUnpinTask.filter((pl)=> {
            //     if(pl.id !== el.id) return pl;
            //     // return pl;
            // })
            // allPinTask = delitem;
            // console.log("🚀 ~ allUnpinTask:", allUnpinTask);
            // console.log("🚀 ~ allPinTask:", allPinTask);
            
            // appendTask(allUnpinTask);
        })

        mainDiv.append(checkBox,text,id);
        taskContent.append(mainDiv);

        
    });



}