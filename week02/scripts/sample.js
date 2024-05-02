const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Click event listener for Add Chapter button
button.addEventListener('click', () => {
  if (input.value.trim() !== '') { 
    const li = document.createElement('li');
    

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; 
    
    li.textContent = input.value.trim(); 

    li.appendChild(deleteButton);

    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus(); 
    });
    

    input.value = '';
  } else {
    input.focus();
  }
});
