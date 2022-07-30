// Transfer all these json data to firestore later
// For the Hands
import single_cheeseburger from '../../../../assets/dishes/burger-single.png';
import double_cheeseburger from '../../../../assets/dishes/burger-double.png';
import single_chickenburger from '../../../../assets/dishes/chickenburger-single.png';
import meatsteak_sandwhich from '../../../../assets/dishes/meat-steak-sandwhich.png';
import zinger_burger from '../../../../assets/dishes/zinger-burger-chicken.png';

// For the Table
import cheese_fries from '../../../../assets/dishes/cheese-fries.png';
import french_fries from '../../../../assets/dishes/french-fries.png';
import korean_dog from '../../../../assets/dishes/korean-hot-dog.png';
import philly_cheese_fries from '../../../../assets/dishes/philly-cheese-fries.png';

export function DinnerObjects() {
    const items = 
    [
        {
            name: 'For The Table',
            items: [
                {name: 'French Fries', ingredients: 'Potato', image: french_fries},
                {name: 'Cheese Fries', ingredients: 'Fries and Cheese', image: cheese_fries},
                {name: 'Korean Hot Dog', ingredients: 'idk', image: korean_dog},
                {name: 'Philly Cheese Fries', ingredients: 'Some meat and ???', image: philly_cheese_fries},
            ]
        },
        {
            name: 'For The Hands',
            items: [
                    {name: 'Chicken Burger', ingredients: 'Chicken patty, lettuce, cheddar cheese, onions, and tomatoes', image: single_chickenburger},
                    {name: 'Cheese Burger', ingredients: 'Single meat patty, lettuce, cheddar cheese, onions, and tomatoes', image: single_cheeseburger},
                    {name: 'Double Cheese Burger', ingredients: 'Double meat patties, lettuce, cheddar cheese, onions, and tomatoes', image: double_cheeseburger},
                    {name: 'Meat Steak Sandwhich', ingredients: 'Some stuff and meat', image: meatsteak_sandwhich},
                    {name: 'Zinger Chicken Burger', ingredients: 'idk', image: zinger_burger},
                   ]
        },
    ]
    return items;
}