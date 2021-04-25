import { useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import uuid from 'react-uuid';

import Button from './UI/Button';
import TraceOutsideClick from '../utilts/traceOutsideClick';
import DropdownMenu from './DropdownMenu';

const dropdownItems = [
    { value: 'Event Screen', id: uuid() },
    { value: 'Go Connect', id: uuid() },
    { value: 'Commerce', id: uuid() },
    { value: 'Non Profits', id: uuid() }
]

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = TraceOutsideClick(dropdownRef, false);

    // useEffect(() => {
    //     const pageClickEvent = e => {
    //         if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
    //             setIsActive(!isActive);
    //         }
    //     }
    //     if (isActive) {
    //         window.addEventListener('click', pageClickEvent);
    //         setTimeout(() => {
    //             setIsReady(true);
    //         }, 100)
    //     } else {
    //         setTimeout(() => {
    //             setIsReady(false);
    //         })
    //     }
    //     return () => {
    //         window.removeEventListener('click', pageClickEvent);
    //     }
    // }, [isActive, isReady]);

    const toggleHandler = () => setIsActive(!isActive);;

    return (
        <div className="dropdown">
            <Button
                classes={`btn btn--light ${isActive ? 'active' : ''}`}
                clicked={toggleHandler}>
                Dropdown <FaAngleDown /> </Button>
            {isActive &&
                <DropdownMenu
                    dropdownRef={dropdownRef}
                    isActive={isActive}
                    dropdownItems={dropdownItems} />}
        </div>)

}

export default Dropdown;