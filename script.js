const item_title = document.getElementById('title');
const item_amount = document.getElementById('amount');
const add_btn = document.querySelector('.add-btn');
const expenseList = document.querySelector('.expense-list');
const total = document.getElementById('total');

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

    item_title.value = '';
    item_amount.value = '';

});