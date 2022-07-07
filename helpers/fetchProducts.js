const fetchProducts = async ($QUERY) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
  const results = await fetch(url); 
  const resultsFunction = await results.json();
  return resultsFunction;
  } catch (e) {
    return (e);
  }
};

// console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
