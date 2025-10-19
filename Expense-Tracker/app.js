let remainingBalStorage = JSON.parse(localStorage.getItem("totalSalary"));

// Add salary
const addSalary = () => {
  let salaryInput = document.getElementById("salary_input");
  let salaryAmt = salaryInput.value;

  let addSalary = document.getElementById("total_salary");
  addSalary.innerText = " ₹ " + salaryAmt;

  let remainingAmt = document.getElementById("remaining_bal");
  remainingAmt.innerText = salaryAmt;

  // Storing the total balance(Salary) in localStorage
  localStorage.setItem("totalSalary", JSON.stringify(Number(salaryAmt)));
};

let salaryDiv = document.querySelector(".salary-div");
let salaryDetails = document.querySelector(".salary-details");
let addSalaryBtn = document.querySelector(".add-salary-btn");
let addItem = document.querySelector(".add-expense-item");

addSalaryBtn.addEventListener("click", () => {
  salaryDiv.style.display = "none";
  salaryDetails.style.display = "flex";
  addItem.style.display = "flex";
});

let count = 0;
const itemDetails = () => {
  let itemNameInp = document.querySelector("#item_name");
  let priceInp = document.querySelector("#price");
  let itemQtyInput = document.querySelector(".item-qty");

  let itemName = itemNameInp.value.trim();
  let price = priceInp.value.trim();
  let qty = itemQtyInput.value;

  let totalPrice = document.querySelector(".total");
  let total = Number(price) * Number(qty);
  totalPrice.innerText = price && qty ? " ₹ " + total : "₹ 0";

  // increasing serial number
  count++;

  let tableBody = document.querySelector(".table-body");

  let tableRow = document.createElement("tr");
  tableRow.className = "table-row";
  tableRow.innerHTML = `
            <td>${count}</td>
            <td>${itemName}</td>
            <td>${price}</td>
            <td>${qty}</td>
            <td>${totalPrice.innerText}</td>
        `;
  let salaryInput = document.getElementById("salary_input").value;
  let remaningBal = document.querySelector("#remaining_bal");

  // Getting the latest remaining balance
  let currentBalance = Number(JSON.parse(localStorage.getItem("totalSalary")));


  // Here remainging balance update from latest remaining balance
  let newBalance = currentBalance - total;

  if (newBalance < 0) {
    alert("You don't have enough balance");
    return;
  }
  
  remaningBal.innerText = newBalance;
  localStorage.setItem("totalSalary", JSON.stringify(newBalance));


  // appending data
  tableBody.append(tableRow);

  itemNameInp.value = "";
  priceInp.value = "";
  itemQtyInput.value = "1";
};


let expenseDetails = document.querySelector(".expense-details");
let addItemBtn = document.querySelector(".add-item-btn");
addItemBtn.addEventListener("click", () => {
  expenseDetails.style.display = "flex";
});
