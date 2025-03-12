export const categories = [
    {
        name: 'Pizzas',
    },
    {
        name: 'Breakfast',
    },
    {
        name: 'Snacks',
    },
    {
        name: 'Cocktails',
    },
    {
        name: 'Drinks',
    },
];

export const _ingredients = [
    {
        name: 'Cheese-filled crust',
        price: 179,
        imageUrl: '/cheese-crust.png',
    },
    {
        name: 'Creamy mozzarella',
        price: 79,
        imageUrl: '/mozzarella.png',
    },
    {
        name: 'Cheddar and Parmesan cheeses',
        price: 79,
        imageUrl: '/cheddar_parmesan.png',
    },
    {
        name: 'Spicy jalapeño pepper',
        price: 59,
        imageUrl: '/jalapeño.png',
    },
    {
        name: 'Tender chicken',
        price: 79,
        imageUrl: '/chicken.png',
    },
    {
        name: 'Mushrooms',
        price: 59,
        imageUrl: '/mushrooms.png',
    },
    {
        name: 'Ham',
        price: 79,
        imageUrl: '/ham.png',
    },
    {
        name: 'Spicy pepperoni',
        price: 79,
        imageUrl: '/pepperoni.png',
    },
    {
        name: 'Spicy chorizo',
        price: 79,
        imageUrl: '/chorizo.png',
    },
    {
        name: 'Pickles',
        price: 59,
        imageUrl: '/pickles.png',
    },
    {
        name: 'Fresh tomatoes',
        price: 59,
        imageUrl: '/tomatoes.png',
    },
    {
        name: 'Red onion',
        price: 59,
        imageUrl: 'onion.png',
    },
    {
        name: 'Juicy pineapples',
        price: 59,
        imageUrl: '/pineapples.png',
    },
    {
        name: 'Italian herbs',
        price: 39,
        imageUrl: '/herbs.png',
    },
    {
        name: 'Sweet pepper',
        price: 59,
        imageUrl: '/pepper.png',
    },
    {
        name: 'Feta cheese cubes',
        price: 79,
        imageUrl: '/cheese_cubes.png',
    },
    {
        name: 'Meatballs',
        price: 79,
        imageUrl: '/meatballs.png',
    },
].map((obj, index) => ({id: index + 1, ...obj}));
