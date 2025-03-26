export const categories = [
  {
    name: "Pizzas",
  },
  {
    name: "Breakfast",
  },
  {
    name: "Snacks",
  },
  {
    name: "Cocktails",
  },
  {
    name: "Drinks",
  },
];

export const _ingredients = [
  { name: "Cheese-filled crust", price: 1.93, imageUrl: "/cheese-crust.png" },
  { name: "Creamy mozzarella", price: 0.85, imageUrl: "/mozzarella.png" },
  { name: "Cheddar and Parmesan cheeses", price: 0.85, imageUrl: "/cheddar_parmesan.png" },
  { name: "Spicy jalapeño pepper", price: 0.64, imageUrl: "/jalapeño.png" },
  { name: "Tender chicken", price: 0.85, imageUrl: "/chicken.png" },
  { name: "Mushrooms", price: 0.64, imageUrl: "/mushrooms.png" },
  { name: "Ham", price: 0.85, imageUrl: "/ham.png" },
  { name: "Spicy pepperoni", price: 0.85, imageUrl: "/pepperoni.png" },
  { name: "Spicy chorizo", price: 0.85, imageUrl: "/chorizo.png" },
  { name: "Pickles", price: 0.64, imageUrl: "/pickles.png" },
  { name: "Fresh tomatoes", price: 0.64, imageUrl: "/tomatoes.png" },
  { name: "Red onion", price: 0.64, imageUrl: "/onion.png" },
  { name: "Juicy pineapples", price: 0.64, imageUrl: "/pineapples.png" },
  { name: "Italian herbs", price: 0.42, imageUrl: "/herbs.png" },
  { name: "Sweet pepper", price: 0.64, imageUrl: "/pepper.png" },
  { name: "Feta cheese cubes", price: 0.85, imageUrl: "/cheese_cubes.png" },
  { name: "Meatballs", price: 0.85, imageUrl: "/meatballs.png" },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Omelet with Ham and Mushrooms",
    imageUrl: "/shawarma1.png",
    categoryId: 2,
  },
  {
    name: "Omelet with Pepperoni",
    imageUrl: "/shawarma2.png",
    categoryId: 2,
  },
  {
    name: "Coffee Latte",
    imageUrl: "/coffee_latte.webp",
    categoryId: 2,
  },
  {
    name: "Sandwich Ham and Cheese",
    imageUrl: "/sandwich.webp",
    categoryId: 3,
  },
  {
    name: "Chicken Nuggets",
    imageUrl: "/nuggets.png",
    categoryId: 3,
  },
  {
    name: "Baked Potatoes with Sauce",
    imageUrl: "/potatoes.webp",
    categoryId: 3,
  },
  {
    name: "Shawarma",
    imageUrl: "/shawarma.webp",
    categoryId: 3,
  },
  {
    name: "Spicy Shawarma",
    imageUrl: "/spicy_shawarma.webp",
    categoryId: 3,
  },
  {
    name: "Banana Milkshake",
    imageUrl: "/milkshake.png",
    categoryId: 4,
  },
  {
    name: "Caramel Apple Milkshake",
    imageUrl: "/caramel_milkshake.png",
    categoryId: 4,
  },
  {
    name: "Milkshake with Oreo Cookies",
    imageUrl: "/oreo_milkshake.png",
    categoryId: 4,
  },
  {
    name: "Classic Milkshake",
    imageUrl: "/classic_milkshake.png",
    categoryId: 4,
  },
  {
    name: "Irish Cappuccino",
    imageUrl: "/irish_cappuccino.png",
    categoryId: 5,
  },
  {
    name: "Caramel Cappuccino",
    imageUrl: "/caramel_cappuccino.webp",
    categoryId: 5,
  },
  {
    name: "Coconut Latte",
    imageUrl: "/coconut_latte.webp",
    categoryId: 5,
  },
  {
    name: "Americano Coffee",
    imageUrl: "/americano_coffee.webp",
    categoryId: 5,
  },
  {
    name: "Coffee Latte",
    imageUrl: "/coffee_latte.webp",
    categoryId: 5,
  },
];