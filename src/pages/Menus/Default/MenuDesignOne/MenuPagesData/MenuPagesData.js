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
                        {name: 'French Fries', ingredients: 'Potato', image: images.frenchFries},
                        {name: 'Cheese Fries', ingredients: 'Fries and Cheese', image: images.cheeseFries},
                        {name: 'Korean Hot Dog', ingredients: 'idk', image: images.koreanDog},
                        {name: 'Philly Cheese Fries', ingredients: 'Some meat and ???', image: images.phillyCheeseFries},
                    ]
                },
                {
                    name: 'For The Hands',
                    items: [
                        {name: 'Some item test', ingredients: 'Some fries and meat', image: ''},
                    ]
                },
        ],
        },
        {
            pageName: 'Burgers',
            pageContent: [{
                name: 'For The Hands',
                items: [
                        {name: 'Chicken Burger', ingredients: 'Chicken patty, lettuce, cheddar cheese, onions, and tomatoes', image: images.singleChickenBurger},
                        {name: 'Cheese Burger', ingredients: 'Single meat patty, lettuce, cheddar cheese, onions, and tomatoes', image: images.cheeseBurger},
                        {name: 'Double Cheese Burger', ingredients: 'Double meat patties, lettuce, cheddar cheese, onions, and tomatoes', image: images.doubleBurger},
                        {name: 'Meat Steak Sandwhich', ingredients: 'Some stuff and meat', image: images.meatSteakSandwhich},
                        {name: 'Zinger Chicken Burger', ingredients: 'idk', image: images.zingerBurger},
                    ]
            }],
        },
        {
            pageName: 'Drinks',
            pageContent: [{
                name: 'Cold Drinks',
                items: [
                    {name: 'Cold one with the Boys', ingredients: 'Beer ofc', image: ''},
                ]
            }]
        },
        {
            pageName: 'Sandwiches',
            pageContent: [{
                name: 'Grilled',
                items: [
                    {name: 'Oily Sandwhich', ingredients: 'Fried oil @_@', image: ''}
                ]
            }]
        }
    ]
    return pages;
}