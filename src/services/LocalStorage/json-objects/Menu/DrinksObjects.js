export function DrinksObjects() {
    const items = 
    [
        {
            name: 'Cocktails',
            items: [
                    {name: 'Blue Pina Colada', ingredients: 'Pineapple Juice, Cream of Coconut, Curacao Syrup, Cherry'},
                    {name: 'Blue Lagoon', ingredients: 'Blue Curacao, Lemonade, Lemon Wheel, Maraschino Cherry'},
                   ]
        },
        {
            name: 'Hot Drinks',
            items: [
                {name: 'Americano', ingredients: ''},
                {name: 'Iced Americano', ingredients: ''},
                {name: 'Espresso', ingredients: ''},
                {name: 'Double Espresso', ingredients: ''},
            ]
        },
        {
            name: 'Milkshakes',
            items: [
                {name: 'Oreo Milkshake', ingredients: 'Oreo, Milk'},
                {name: 'Vanilla Milkshake', ingredients: 'Vanilla, Milk'},
                {name: 'Chocolate Milkshake', ingredients: 'Chocolate, Milk'},
                {name: 'Machine Learning', ingredients: '???'},
            ]
        },
    ]
    return items;
}