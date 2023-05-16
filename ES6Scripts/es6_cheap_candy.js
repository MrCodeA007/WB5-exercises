`use strict`;

let product = [
  { products: "Gummy Worms", prices: 5.79 },
  { products: "Plain M&Ms", prices: 2.89 },
  { products: "Peanut M&Ms", prices: 2.89 },
  { products: "Swedish Fish", prices: 3.79 },
  { products: "Fruit Snacks", prices: 2.0 },
  { products: "snickers", prices: 1.0 },
  { products: "jolly Ranchers pack", prices: 5.0 },
  { products: "Crunch", prices: 2.0 },
  { products: "Haribo", prices: 1.0 },
  { products: "tootsie roll", prices: 0.5 },
];

//exercise 1-A

// how to do it in a function
//function costLessThan4(item) {
//  return item.price < 4;
// }

const under4 = product.filter((item) => item.prices < 4);
under4.forEach((item) => {
  console.log(item.prices.toFixed(2), item.products);
});

const mms = product.filter((item) => item.products.indexOf("M&Ms") !== -1);
mms.forEach((item) => console.log(item.products));

const foundFish = product.find((item) => item.products === "Swedish Fish");
if (foundFish) {
  console.log("yes, we have swedish fish");
} else {
  console.log("no, we do not have swedish fish");
}
