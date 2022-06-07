console.log("cart.js is loaded");

let carts = document.querySelectorAll('.buy-button');

let gameConsole = ['Playstation 4', 'Xbox One', 'Nintendo Switch']

let products = [
    {
        name: 'Assassin\'s Creed: The Ezio Collection',
        console: 'Playstation 4',
        price: 26.99,
        inCart: 0
    },
    {
        name: 'Assassin\'s Creed: The Ezio Collection',
        console: 'Xbox One',
        price: 26.99,
        inCart: 0
    },
    {
        name: 'Batman: Arkham Knight',
        console: 'Playstation 4',
        price: 8.99,
        inCart: 0
    },
    {
        name: 'Batman: Arkham Knight',
        conole: 'Xbox One',
        price: 8.99,
        inCart: 0
    },

]

let option = "";

for (let i = 0; i < gameConsole.length; i++) {
    option += '<option value="' + gameConsole[i] + '">' + gameConsole[i] + "</option>";
}

document.getElementById('console').innerHTML = option;

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.nav-item span').textContent = productNumbers;
    }

}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.nav-item span').textContent = productNumbers + 1;
       
    } 
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav-item span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }

}

onLoadCartNumbers();
