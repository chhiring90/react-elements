import { AiFillHome } from 'react-icons/ai';
import { TiBusinessCard } from 'react-icons/ti';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

import NavigationItem from './NavigationItem';

const navigation = props => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <NavigationItem link="/"><AiFillHome /> Home</NavigationItem>
                <NavigationItem link="/progress-deck" exact><TiBusinessCard /> ProgressDeck</NavigationItem>
                <NavigationItem link="/dropdown" exact><IoIosArrowDropdownCircle /> Dropdown</NavigationItem>
            </ul>
        </nav>)
}

export default navigation;