// Home Section Navbar Toggle Add To Card Sider Bar Animation //
// $(document).ready(function () {
//   $("#user_login").click(function () {
//     $("#logout_btn").toggle(100);
//   });
// });



var navbartoggle = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbartoggle.classList.toggle('active');
  
}

window.onscroll = () => {
  
  navbartoggle.classList.remove('active');
}

// Home Section Navbar Toggle Add To Card Sider Bar Animation //






// Home Section Text Animation //


var typed = new Typed('#element', {
  strings: ['Here, you will find all the necessary', 'items at a 50% discount.', 'This offer is valid For Only 2 Days.', 'So Let,s Go Come Fast.'],typeSpeed: 50,
});

// Home Section Text Animation //







// Feauter Section  Animation //

AOS.init();

// Feauter Section  Animation //





/////     cart local save    ////



DataFetch();
function DataFetch() {

  var existingdata = localStorage.getItem("ProductList");
      var productList = [];
  var ID_products = document.getElementById("ID_products");

  if (existingdata)
    productList = JSON.parse(existingdata);

  productList.forEach(element => {
    ID_products.innerHTML += ' <div class="card-2 card">' + ' <img class="product-image" src="Images/iphone xs.jpg" alt=""> '
      + '<h5>' + element.p_name + '</h5>' + ' <p> ' + element.p_des + '</p> '
      + '<span class="product-price">' + element.p_price + '</span>' + '<button class="add-to-cart">Add To Cart</button></div>';
  });
};




/////     cart local save    ////










        // open cart modal
        const cart = document.querySelector('#cart');
        const cartModalOverlay = document.querySelector('.cart-modal-overlay');

        cart.addEventListener('click', () => {
            if (cartModalOverlay.style.transform === 'translateX(-200%)') {
                cartModalOverlay.style.transform = 'translateX(0)';
            } else {
                cartModalOverlay.style.transform = 'translateX(-200%)';
            }
        })
        // end of open cart modal

        // close cart modal
        const closeBtn = document.querySelector('#close-btn');

        closeBtn.addEventListener('click', () => {
            cartModalOverlay.style.transform = 'translateX(-200%)';
        });

        cartModalOverlay.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart-modal-overlay')) {
                cartModalOverlay.style.transform = 'translateX(-200%)'
            }
        })
        // end of close cart modal

        // add products to cart
        const addToCart = document.getElementsByClassName('add-to-cart');
        const productRow = document.getElementsByClassName('product-row');

        for (var i = 0; i < addToCart.length; i++) {
            button = addToCart[i];
            button.addEventListener('click', addToCartClicked)
        }

        function addToCartClicked(event) {
            button = event.target;
            var cartItem = button.parentElement;
            var price = cartItem.getElementsByClassName('product-price')[0].innerText;

            var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
            addItemToCart(price, imageSrc);
            updateCartPrice()
        }

        function addItemToCart(price, imageSrc) {
            var productRow = document.createElement('div');
            productRow.classList.add('product-row');
            var productRows = document.getElementsByClassName('product-rows')[0];
            var cartImage = document.getElementsByClassName('cart-image');

            for (var i = 0; i < cartImage.length; i++) {
                if (cartImage[i].src == imageSrc) {
                    alert('This item has already been added to the cart')
                    return;
                }
            }

            var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
            productRow.innerHTML = cartRowItems;
            productRows.append(productRow);
            productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
            productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
            updateCartPrice()
        }
        // end of add products to cart

        // Remove products from cart
        const removeBtn = document.getElementsByClassName('remove-btn');
        for (var i = 0; i < removeBtn.length; i++) {
            button = removeBtn[i]
            button.addEventListener('click', removeItem)
        }

        function removeItem(event) {
            btnClicked = event.target
            btnClicked.parentElement.parentElement.remove()
            updateCartPrice()
        }

        // update quantity input
        var quantityInput = document.getElementsByClassName('product-quantity')[0];

        for (var i = 0; i < quantityInput; i++) {
            input = quantityInput[i]
            input.addEventListener('change', changeQuantity)
        }

        function changeQuantity(event) {
            var input = event.target
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1
            }
            updateCartPrice()
        }
        // end of update quantity input

        // update total price
        function updateCartPrice() {
            var total = 0
            for (var i = 0; i < productRow.length; i += 2) {
                cartRow = productRow[i]
                var priceElement = cartRow.getElementsByClassName('cart-price')[0]
                var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
                var price = parseFloat(priceElement.innerText.replace('$', ''))
                var quantity = quantityElement.value
                total = total + (price * quantity)

            }
            document.getElementsByClassName('total-price')[0].innerText = '$' + total

            document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
        }
        // end of update total price

        // purchase items
        const purchaseBtn = document.querySelector('.purchase-btn');

        const closeCartModal = document.querySelector('.cart-modal');

        purchaseBtn.addEventListener('click', purchaseBtnClicked)

        function purchaseBtnClicked() {
            alert('Thank you for your purchase');
            cartModalOverlay.style.transform = 'translateX(-100%)'
            var cartItems = document.getElementsByClassName('product-rows')[0]
            while (cartItems.hasChildNodes()) {
                cartItems.removeChild(cartItems.firstChild)

            }
            updateCartPrice()
        }
// end of purchase items

//alert user if cart is empty 







// ///       contact us       /////

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

  
    const fullNameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

  
    if (fullNameInput.value.trim() === '') {
        alert('Please enter your full name.');
        fullNameInput.focus();
        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }


    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        messageInput.focus();
        return;
    }

 
    alert('Message successfully sent!');
    
   
    fullNameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    
});


function addInputListener(inputElement, spanElement) {
    inputElement.addEventListener('input', () => {
        spanElement.style.transform = inputElement.value !== '' ? 'translateY(-20px)' : 'none';
    });
}

const fullname = document.querySelector('#fullname');
const span1 = document.querySelector('#span1');
addInputListener(fullname, span1);

const email = document.querySelector('#email');
const span2 = document.querySelector('#span2');
addInputListener(email, span2);

const message = document.querySelector('#message');
const span3 = document.querySelector('#span3');
addInputListener(message, span3);




// ///       contact us       /////




