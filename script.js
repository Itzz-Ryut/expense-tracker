const item_title = document.getElementById('title');
const item_amount = document.getElementById('amount');
const add_btn = document.querySelector('.add-btn');
const expenseList = document.querySelector('.expense-list');
const total = document.getElementById('total');
let sum = 0; // for total amount

add_btn.addEventListener('click', ()=>{
    const new_list = document.createElement('li');


    
    const input_name = item_title.value;
    const input_amount = item_amount.value;
    
    //Check if its value empty
    if(input_name === '' || input_amount === '') {
        alert('Please fill empty fields');
        return;
        
    }
    
    new_list.textContent = `${input_name} - ${input_amount}`;
    
    expenseList.appendChild(new_list);
    // updating amount if new item added

    sum += parseInt(input_amount); 
    total.innerHTML = sum;

    //creating delete button:-
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    deleteButton.setAttribute('data-amount', input_amount);

    new_list.appendChild(deleteButton);

    deleteButton.addEventListener('click',() =>{
        new_list.remove();
        sum -= parseInt(deleteButton.dataset.amount);
        total.innerHTML = sum;
    })




    item_title.value = '';
    item_amount.value = '';

});