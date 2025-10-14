// Add salary



const addSalary = () => {
    let salaryInput = document.getElementById("salary_input").value;
    salaryInput.value = "";

    let addSalary = document.getElementById("total_salary");
    let remainingAmt = document.getElementById("remaining_amt");
    addSalary.innerText = salaryInput;
    remainingAmt.innerText = salaryInput;
    
    
    
}

let salaryDiv = document.querySelector(".salary-div");
let salaryDetails = document.querySelector(".salary-details");
let addSalaryBtn = document.querySelector(".add-salary-btn");
let addItem = document.querySelector(".add-expense-item")
addSalaryBtn.addEventListener("click", ()=> {
    salaryDiv.style.display = "none"
    salaryDetails.style.display = "flex"
    addItem.style.display = "flex"
});

const itemDetails = () => {
    let itemNameInp = document.querySelector("#item_name").value;
    let priceInp = document.querySelector("#price").value;

    return `
        <tr>
            <td>1</td>
            <td>${itemNameInp}</td>
            <td>${priceInp}</td>
            <td>10</td>
        </tr>
    `

}