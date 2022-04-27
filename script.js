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

// function getSkuFromProductItem(item) {
//   console.log(item.querySelector('span.item__sku').innerText);
// }

function cartItemClickListener(event) {
  // console.log('ronaldo');
  // console.log(event.target);
  const results = event.target;
  results.remove();
}
function createCartItemElement({ sku, name, salePrice }) {
  const cart = document.querySelector('.cart__items');
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  cart.appendChild(li);
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

window.onload = () => {
  fetchResults();
};
