import { useRef } from 'react';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import Button from '../Button/button';

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const clickHandler = () => setIsActive(!isActive);
    return (
        <div className="menu-container">
            <Button clicked={clickHandler} classes="menu-trigger">
                <span>User</span>
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
            </Button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="/messages">Messages</a></li>
                    <li><a href="/trips">Trips</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default DropdownMenu;