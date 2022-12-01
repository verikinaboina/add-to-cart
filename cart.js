// Just adding Items
const inputText = document.getElementById('inputText')
const addToCartBtn = document.querySelector('.addCartBtn');
const listItems = document.querySelector('.container ul')

addToCartBtn.addEventListener('click', (event) => {
    if(inputText.value !== ''){
        event.preventDefault(); // need to know that it does
        var items = document.createElement('li');
        items.innerText = inputText.value;
        listItems.appendChild(items);
        // creating span for list items
        const spanBtn = document.createElement('span');
        spanBtn.innerHTML = 'X';
        items.appendChild(spanBtn);
    }
    const close = document.querySelectorAll('span');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                close[i].parentElement.style.display = 'none';
                close[i].parentElement.remove();
            }, 500)
        })
    }
    inputText.value = '';
})

