function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function calculatePrice() {
  const spamCart = document.querySelectorAll('.total-price');
  spamCart.forEach((item) => item.remove());
  // let price = 0;
  // const spamListPrice = document.querySelectorAll('.spanNone');
  // spamListPrice.forEach((item) => {
  // price += Number(item.textContent);
  // });
  let price = 0;
  const spamListPrice = document.querySelectorAll('.cart__item');
  spamListPrice.forEach((item) => {
    const priceItem = item.innerHTML.split('PRICE: $')[1];
    price += Number(priceItem);
  });
  return price;
}
function totalPrice() {
  const sectionCart = document.querySelector('section.cart');
  // console.log(sectionCart);
  const priceTotal = document.createElement('span');
  priceTotal.classList.add('total-price');
  priceTotal.textContent = `${calculatePrice()}`;
  sectionCart.appendChild(priceTotal);
  // saveCartItems();
}
function cartItemClickListener(event) {
  // console.log('ronaldo');
  // console.log(event.target);
  const results = event.target;
  console.log(event.target.innerHTML.split('PRICE: $')[1]);
  results.remove();
  totalPrice();
  saveCartItems();
}
function createCartItemElement({ sku, name, salePrice }) {
  const cart = document.querySelector('.cart__items');
  const li = document.createElement('li');
  // const spanLi = document.createElement('span');
  const divLi = document.createElement('div');
  // spanLi.innerText = salePrice;
  // spanLi.classList.add('spanNone');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  divLi.appendChild(li);
  // divLi.appendChild(spanLi);
  cart.appendChild(li);
  totalPrice();
  saveCartItems();
}
async function fetchItemResults(parameter) {
  const results = await fetchItem(parameter);
  const sku = results.id;
  const name = results.title;
  const salePrice = results.price;
  createCartItemElement({ sku, name, salePrice });
}
async function addCartItemClickListener(event) {
  const itemSelected = event.target.parentNode.children[0].innerText;
  fetchItemResults(itemSelected); 
}
function createProductItemElement({ sku, name, image }) {
  const sectionItens = document.querySelector('.items');
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  sectionItens.appendChild(section);
  const addButton = document.querySelectorAll('.item__add');
addButton.forEach((item) => {
  item.addEventListener('click', addCartItemClickListener);
});
}
function fecthProductsFor(resultsFunction) {
  resultsFunction.results.forEach((element) => {
    const sku = element.id;
    const name = element.title;
    const image = element.thumbnail;
    createProductItemElement({ sku, name, image });
  });
}
async function fetchResults() {
fecthProductsFor(await fetchProducts('computador'));
}

const emptyCart = document.querySelector('.empty-cart');
emptyCart.addEventListener('click', () => {
  const totalItems = document.querySelector('.cart__items');
  totalItems.innerHTML = '';
  totalPrice();
  saveCartItems();
});

window.onload = () => {
  fetchResults();
  getSavedCartItems();
  totalPrice();
};
