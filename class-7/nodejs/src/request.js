const fetchPromise1 = async ()=> {
  const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
  const data = await response.json();
  return data[0].name
};

fetchPromise1().then((data)=>  console.log(data));

module.exports = {
    fetchPromise1
}