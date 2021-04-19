import { useEffect, useState } from 'react';

export const useDetectOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (el !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        // if the item is active ie{open} listen for the clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [isActive, el]);

    return [isActive, setIsActive]
}