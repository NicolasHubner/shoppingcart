const fetchItem = async ($ItemID) => {
  try {
  const fetchResult = await fetch(`https://api.mercadolibre.com/items/${$ItemID}`);
  const results = await fetchResult.json();
  return results;
  } catch (e) {
    return e;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
