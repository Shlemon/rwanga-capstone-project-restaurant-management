import { ImageDataset } from '../../../../../assets/ImageData';
// Transfer all these json data to firestore later

// I left this here just so I can remember the
// structure of the objects I'm using, 
// for later use in Dashboard
export function PagesObject() {
    const images = ImageDataset();
    const pages = 
    [
        {
            pageName: 'Sides',
            pageContent: [
                {
                    name: 'For The Table',
                    items: [
                        {name: 'French Fries', ingredients: 'Potato, Salt, & Pepper', image: images.frenchFries, price: 2000},
                        {name: 'Cheese Fries', ingredients: 'Potato, Garlic, Onion, Salt, Pepper, & Paprika', image: images.cheeseFries, price: 3000},
                        {name: 'Meat Cheese Fries', ingredients: 'Potato, Salt, Pepper, Garlic, Onion, Paprika, Jalapeno, & Red Meat', image: images.phillyCheeseFries, price: 5000},
                    ]
                },
                {
                    name: 'For The Hands',
                    items: [
                        {name: 'Korean Hot Dog', ingredients: 'Sausage, Mozzarella Cheese, & Our Special Batter Mix, ', image: images.koreanDog, price: 1500},
                    ]
                },
        ],
        },
        {
            pageName: 'Burgers',
            pageContent: [{
                name: 'For The Hands',
                items: [
                        {name: 'Chicken Burger', ingredients: 'Chicken, Cheddar Cheese, Lettuce, Tomato, & Pickle Slices', image: images.singleChickenBurger, price: 3000},
                        {name: 'Cheese Burger', ingredients: 'Beef, Cheddar Cheese, Ketchup, Pickle Slices, Onions, & Lettuce', image: images.cheeseBurger, price: 4000},
                        {name: 'Double Cheese Burger', ingredients: 'Double Beef Patty, Cheddar Cheese, Ketchup, Pickle Slices, Onions, & Lettuce', image: images.doubleBurger, price: 7000},
                        {name: 'Meat Steak Sandwhich', ingredients: 'Beef Steak, Mushrooms, Onion, Fresh Pepper, Pickled Hot Pepper, Cheddar Cheese, & French Bagguette', image: images.meatSteakSandwhich, price: 5000},
                        {name: 'Zinger Chicken Burger', ingredients: 'Boneless Chicken Thigh, Tomato, Onion, Cheddar Cheese, & Lettuce', image: images.zingerBurger, price: 3500},
                    ]
            }],
        },
        {
            pageName: 'Drinks',
            pageContent: [
                {
                    name: 'Hot Drinks',
                    items: [
                        {name: 'Black Tea', ingredients: 'Alwazah Tea', image: images.teaBlack, price: 500},
                        {name: 'Turkish Coffee', ingredients: 'Fresh Grind Coffee Beans', image: images.coffeeTurkish, price: 2000},
                        {name: 'Cappucino', ingredients: 'Cappucino Instant Coffee', image: images.coffeeCappucino, price: 1000},
                    ]
                },
                {
                    name: 'Cold Drinks',
                    items: [
                        {name: 'Mexican Drink', ingredients: 'Red Bull, Lemon, Salt', images: images.mexicanDrink, price: 4000},
                        {name: 'Soda', ingredients: '500ml Can Soda Drink', images: images.soda, price: 500},
                        {name: 'Fresh Orange Juice', ingredients: 'Oranges', image: images.orangeJuice, price: 3000}
                    ]
                }
            ]
        },
        {
            pageName: 'Sandwiches',
            pageContent: [
                {
                    name: 'For The Hands',
                    items: [
                        {name: 'Doner Chicken', ingredients: 'Chicken Shawarma, Onion, Yogurt, Tomato, & Sauce', image: images.donerChicken, price: 2500},
                        {name: 'Doner Chicken With Cheese', ingredients: 'Chicken Shawarma, Cheddar Cheese, Onion, Yogurt, Tomato, & Sauce', image: images.donerChickenCheese, price: 3250},
                        {name: 'Doner Meat', ingredients: 'Meat Shawarma, Onion, Yogurt, Tomato, & Sauce', image: images.donerMeat, price: 4500},
                        {name: 'Chicken Shawarma Roll', ingredients: 'Chicken Shawarma, Onion, Yogurt, Tomato, Tahini, & Lettuce', image: images.shawarmaChicken, price: 3000},
                        {name: 'Chicken Shawarma Roll With Cheese', ingredients: 'Chicken Shawarma, Cheddar Cheese, Onion, Yogurt, Tomato, Tahini, & Lettuce', image: images.shawarmaChicken, price: 4000},
                        {name: 'Meat Shawarma Roll', ingredients: 'Meat Shawarma, Onion, Yogurt, Tomato, Tahini, & Lettuce', image: images.shawarmaMeat, price: 5000},
                    ]
                },
                {
                    name: 'Grilled',
                    items: [
                        {name: 'Chicken Tantuni', ingredients: 'Chicken Breast, Tomato, Onion, Green Pepper, & Chopped Parsley', image: images.tantuniChicken, price: 2000},
                        {name: 'Meat Tantuni', ingredients: 'Ground Beef, Tomato, Onion, Green Pepper, & Chopped Parsley', image: images.tantuniMeat, price: 2500},
                        {name: 'Chicken Tantuni With Yogurt', ingredients: 'Chicken Breast, Yogurt, Tomato, Onion, Green Pepper, & Chopped Parsley', image: images.tantuniChicken, price: 3500},
                        {name: 'Meat Tantuni With Yogurt', ingredients: 'Ground Beef, Yogurt, Tomato, Onion, Green Pepper, & Chopped Parsley', image: images.tantuniMeat, price: 4500},
                    ]
                }
            ]
        }
    ]
    return pages;
}