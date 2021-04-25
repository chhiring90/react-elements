import { useEffect, useState } from 'react';

const TraceOutsideClick = (el, initalState) => {
    const [isActive, setIsActive] = useState(initalState);

    useEffect(() => {
        const pageClickHandler = e => {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        }

        if (isActive) {
            window.addEventListener('click', pageClickHandler);
        }

        return () => {
            window.removeEventListener('click', pageClickHandler);
        }

    }, [isActive, el]);

    return [isActive, setIsActive]
}

export default TraceOutsideClick;