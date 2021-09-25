// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // step 1: creer 2 variables price et quantity qui contiennent 25 et la qte saisie par l'iutilisateur
  let priceElement = product.querySelector('.price span') // <span>25.00</span>
  let price = priceElement.textContent // "25.00"
  console.log(price)

  
  let quantityElement = product.querySelector('.quantity input') // <input />
  let quantity = quantityElement.value // "8"
  console.log(quantity)

  let calculate = Number(price) * Number(quantity)
  console.log(calculate)
}

// brancher un ecouteur click sur le bouton bleu
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function calculateAll() {
  console.log('test calculateAll')

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product'); // <tr class="produc">
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
