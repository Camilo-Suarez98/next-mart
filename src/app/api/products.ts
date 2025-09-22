export const getProducts = async () => {
  const url = 'https://fakestoreapi.com/products';
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
