// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const pricePerProduct = price.innerHTML;
  const quantityPerProduct = quantity.value;

  const subtotalPrice = pricePerProduct * quantityPerProduct;

  const subtotalHolder = product.querySelector('.subtotal span');

  subtotalHolder.innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const product1 = document.querySelector('.product1');
  const product2 = document.querySelector('.product2');
  updateSubtotal(product1);
  updateSubtotal(product2);

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = updateSubtotal(product1) + updateSubtotal(product2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}
const removeBtns = document.getElementsByClassName('btn-remove');
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('btn-remove');

  //... your code goes here
});
