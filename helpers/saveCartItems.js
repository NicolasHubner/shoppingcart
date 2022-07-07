const saveCartItems = (parameter) => {
  // const controle = [];
  // const controleprice = [];
  // localStorage.clear();
  // const olclassItems = document.querySelector('.cart__items');
  // const classItems = document.querySelectorAll('.cart__item');
  // const priceTotal = document.querySelector('.total-price');
  // classItems.forEach((items) => {
  // controle.push(items.innerHTML);
  // //   console.log(items.textContent);
  // // localStorage.setItem('cart', JSON.stringify(items.textContent));
  // });
  // localStorage.setItem('price', JSON.stringify(priceTotal.textContent));
  localStorage.setItem('cartItems', parameter);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
