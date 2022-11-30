// Just adding Items
const inputText = document.getElementById('inputText')
const addToCartBtn = document.getElementById('addCartBtn');
const listItems = document.querySelector('.container')

addToCartBtn.addEventListener('click', (event) => {
    if(inputText.value){
        // event.preventDefault();
        var items = document.createElement('li');
        items.innerText = inputText.value;
        listItems.appendChild(items);

        const spanBtn = document.createElement('span');
        spanBtn.innerHTML = 'X';
        inputText.append(spanBtn);
    }
    inputText.value = '';
    const close = document.getElementById('span');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].currentElement.style.opacity = 0;
            close[i].currentElement.style.display = 'none';
        })
    }
})

addToCartBtn.addEventListener('click', (event) => {

})
