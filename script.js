// Selecting elements
const item_title = document.getElementById('title');
const item_amount = document.getElementById('amount');
const add_btn = document.querySelector('.add-btn');
const expenseList = document.querySelector('.expense-list');
const total = document.getElementById('total');

// Declare main variables
let expenses = JSON.parse(localStorage.getItem("expenses")) || []; // load- saved or empty
let sum = 0;
let id = expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 0; // ID count

// Function: Save to localStorage
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Function: Update total
function updateTotal() {
  sum = expenses.reduce((acc, e) => acc + e.amount, 0);
  total.textContent = sum;
}

// Function: Create visual list item
function createExpenseItem(expense) {
  const li = document.createElement('li');
  li.textContent = `${expense.title} - ${expense.amount}`;

  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete-btn');
  deleteButton.dataset.id = expense.id;

  li.appendChild(deleteButton);
  expenseList.appendChild(li);

  // delete feature
  deleteButton.addEventListener('click', () => {
    // remove from UI
    li.remove();
    // remove from array
    expenses = expenses.filter(e => e.id !== expense.id);
    // update storage
    saveExpenses();
    // update total
    updateTotal();
  });
}

// Function: Add new expense
function addExpense() {
  const title = item_title.value.trim();
  const amount = parseInt(item_amount.value.trim());

  if (!title || !amount) {
    alert("Please fill both fields!");
    return;
  }

  const newExpense = {
    id: id++,
    title: title,
    amount: amount
  };

  // add to array
  expenses.push(newExpense);
  // save to localStorage
  saveExpenses();
  // show in list
  createExpenseItem(newExpense);
  // update total
  updateTotal();

  // clear inputs
  item_title.value = '';
  item_amount.value = '';
}

// Add event listener for add button
add_btn.addEventListener('click', addExpense);

// Load all saved expenses on page start
expenses.forEach(expense => createExpenseItem(expense));
updateTotal();
