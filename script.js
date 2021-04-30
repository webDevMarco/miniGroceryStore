    const products = [
        {id: 'item1', name: 'Pinto Beans', imageURL: '1.jpg', price: 1.99},
        {id: 'item2', name: 'Pepsi', imageURL: '2.jpg', price: 0.99},
        {id: 'item3', name: 'Riceland Rice', imageURL: '3.jpg', price: 6.99},
        {id: 'item4', name: 'Ham', imageURL: '4.jpg', price: 2.99},
        {id: 'item5', name: 'Milk', imageURL: '5.jpg', price: 2.49},
        {id: 'item6', name: 'Juice', imageURL: '6.jpg', price: 4.99},
    ];
    
    const productBox = document.getElementById('catalog');
    const itemDisplay = document.getElementById('itemDisplay');
    const priceDisplay = document.getElementById('priceDisplay');
    const totalDisplay = document.getElementById('totalDisplay')
    const productButtonDisplay = document.getElementById('productButtonDisplay')
    const selected = [];
    
    function updatePriceDisplay() {
      const names = selected.map(product => product.name).join('<br>');
      const prices = selected.map(product => product.price).join('<br>')
      const total = selected.reduce((sum, product) => sum + product.price, 0);

      if(selected.length === 0){
        priceDisplay.innerHTML = ``
            itemDisplay.innerHTML = ` `
            totalDisplay.innerHTML = `Your cart is empty!`
            totalDisplay.classList.add('chosenItems')
      }
      else{
        itemDisplay.innerHTML = `<p>${names}</p>`
        priceDisplay.innerHTML = `<p>${prices}</p>`
        totalDisplay.innerHTML = `Your total is: $${total.toFixed(2)}`

        itemDisplay.classList.add('chosenItems')
        priceDisplay.classList.add('chosenItems')
        totalDisplay.classList.remove('chosenItems')
      }

    
    }
    
    products.forEach(product => {
      const el = document.createElement('div');
      el.classList.add('items');
      el.innerHTML = `
          <p class="product-name">${product.name}</p>
          <img src="${product.imageURL}" class="product-image">
          <p class="product-price">$${product.price}</p>`;

          el.classList.add('items-added');

    const buyButton = document.createElement('button');
    buyButton.innerText = 'BUY'
    buyButton.classList.add('buyItem')

    el.append(buyButton);

      buyButton.addEventListener('click', () => {
        totalDisplay.classList.remove('soldItem')
        totalDisplay.classList.add('boughtItem')

        selected.push(product);
        updatePriceDisplay();
      });
      productBox.append(el);


      
     const deleteItem = document.createElement('button');
     deleteItem.innerText = 'REMOVE'
     deleteItem.classList.add('removeItem')
     productButtonDisplay.append(deleteItem);

     el.append(deleteItem);

      deleteItem.addEventListener('click', ()=>{
        totalDisplay.classList.remove('boughtItem') 
        totalDisplay.classList.add('soldItem')
       const index = selected.indexOf(product);
        if(index > -1){
            selected.splice(index,1)
            updatePriceDisplay();
        }

      })
    });


