    const products = [
        {id: 'item1', name: 'Pinto Beans', imageURL: '1.jpg', price: 1.99},
        {id: 'item2', name: 'Pepsi 2LTR', imageURL: '2.jpg', price: 0.99},
        {id: 'item3', name: 'Riceland Rice', imageURL: '3.jpg', price: 6.99},
        {id: 'item4', name: 'Ham', imageURL: '4.jpg', price: 2.99},
        {id: 'item5', name: 'Milk', imageURL: '5.jpg', price: 2.49},
        {id: 'item6', name: 'Juice', imageURL: '6.jpg', price: 4.99},
    ];
    
    const productBox = document.getElementById('catalog1');
    const priceDisplay = document.getElementById('priceDisplay');
    const selected = [];
    
    function updatePriceDisplay() {
      const names = selected.map(product => product.name + ': $' + product.price).join('<br>');
      const total = selected.reduce((sum, product) => sum + product.price, 0);
      priceDisplay.innerHTML = `
                                <p>${names}</p>`
                                priceDisplay.append('Your total is: $' + total.toFixed(2));
    }
    
    products.forEach(product => {
      const el = document.createElement('div');
    let count = 1;
      el.classList.add('items');
      el.innerHTML = `
          <p class="product-name">${count}${product.name}</p>
          <img src="${product.imageURL}" class="product-image">
          <p class="product-price">$${product.price}</p>`;

        const buyButton = document.createElement('button');
        buyButton.innerText = 'BUY'
        el.append(buyButton);


      buyButton.addEventListener('click', () => {
        selected.push(product);
        updatePriceDisplay();
      });
      productBox.append(el);
    });

    
let deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', (e) =>{
    selected.pop(e);
    updatePriceDisplay();
    if(priceDisplay.innerText == '= $0.00'){
        priceDisplay.innerText = '';
    }
})


function setup(){
    let km = milesToKim(26.3);
    println(km)
}

function milesToKim(miles){
    let km = miles * 1.6;
    return km;
}

// test
