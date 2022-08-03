import singleCheeseburger from '../assets/dishes/burger-single.png';
import doubleCheeseburger from '../assets/dishes/burger-double.png';
import singleChickenburger from '../assets/dishes/chickenburger-single.png';
import meatSteakSandwhich from '../assets/dishes/meat-steak-sandwhich.png';
import zingerBurger from '../assets/dishes/zinger-burger-chicken.png';

import cheeseFries from '../assets/dishes/cheese-fries.png';
import frenchFries from '../assets/dishes/french-fries.png';
import koreanDog from '../assets/dishes/korean-hot-dog.png';
import phillyCheeseFries from '../assets/dishes/philly-cheese-fries.png';


export function ImageDataset()
{
    return(
        {
            cheeseBurger: singleCheeseburger,
            doubleBurger: doubleCheeseburger,
            singleChickenBurger: singleChickenburger,
            meatSteakSandwhich: meatSteakSandwhich,
            zingerBurger: zingerBurger,
            cheeseFries: cheeseFries,
            frenchFries: frenchFries,
            koreanDog: koreanDog,
            phillyCheeseFries: phillyCheeseFries,
        }
    );
}