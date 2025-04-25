/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const products = [
  { 
    name : "Mango", 
    price : 10.00, 
    quantity : 0, 
    productId : 1, 
    image : "https://static.vecteezy.com/system/resources/thumbnails/026/795/003/small_2x/mango-fruit-tropical-transparent-png.png" 
  },
  { 
    name : "Banana",  
    price : 9.50, 
    quantity : 0, 
    productId : 2, 
    image : "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg" 
  },
  { 
    name : "Watermelon", 
    price : 6.00, 
    quantity : 0,  
    productId : 3, 
    image : "https://www.jiomart.com/images/product/original/590000052/watermelon-namdhari-5-kg-product-images-o590000052-p590126819-0-202412031823.jpg?im=Resize=(1000,1000)" 
  },
  { 
    name : "Cherry", 
    price : 13.00, 
    quantity : 0, 
    productId : 4, 
    image : "images/cherry.jpg" 
  },
  { 
    name : "Orange",  
    price : 6.50, 
    quantity : 0, 
    productId : 5, 
    image : "images/orange.jpg" 
  },
  { 
    name : "Strawberry", 
    price : 3.00, 
    quantity : 0,  
    productId : 6, 
    image : "images/strawberry.jpg" 
  }
];


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity ( -- using increaseQuantity function)
  - if the product is not already in the cart, add it to the cart
*/ 

//Helper function help to find the product from the product list
function findProduct(productId, productList) {
  return productList.find(product => product.productId === productId);
} 

function addProductToCart(productId) {
  let product = findProduct(productId, products);
  
  //check if the product exist in a cart or not
  if (!cart.includes(product)) {
    cart.push(product)
  }
  increaseQuantity(productId)
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {

  // find the product and increase the quantity of the product
  let product = findProduct(productId, cart)
  product.quantity = product.quantity + 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  // find the product and decrease the quantity of the product
  let product = findProduct(productId, cart)
  product.quantity = product.quantity - 1;

  //if the quantity of the product is equal to zero remove the product from the cart
  if (product.quantity === 0) removeProductFromCart(productId);
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let product = findProduct(productId, cart) 
  product.quantity = 0; // set the product quatity is equal to zero
  cart.splice(cart.indexOf(product),1) // remove from the cart
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let totalCost = 0;

  // calculating the total cost and returning it
  for (let i =0; i < cart.length; i++) {
    totalCost = totalCost + (cart[i].quantity * cart[i].price);
  }
  return totalCost;
}

function emptyCart() {
  cart.forEach(val => removeProductFromCart(val.productId)) //empty everything from cart
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

let totalPaid = 0;

function pay(amount) {

  // Amount paid by customer
  totalPaid = totalPaid + amount;

  let remainingBalance = totalPaid - cartTotal(); //calculate remaining balance

  //if remaining balance is greater than zero retrun the amount and empty the cart
  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
   //else return the remaining balance
   return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}