const getSavedCartItems = (parameter) => 
  // const cart = document.querySelector('ol.cart__items');
  // const results2 = localStorage.getItem('cartItems');
  // const results = results2;
  // cart.innerHTML = results;
  // const li = document.querySelectorAll('li.cart__item');
  // li.forEach((item) => item.addEventListener('click', cartItemClickListener));
   localStorage.getItem(parameter);
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
