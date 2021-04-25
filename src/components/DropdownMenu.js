const dropdownMenu = ({ dropdownRef, dropdownItems, isActive }) => {
    return (
        <ul
            ref={dropdownRef}
            className={`dropdown__menu ${isActive ? 'show' : 'hide'}`}>
            {dropdownItems.map(el =>
                <li
                    key={el.id}>
                    <a
                        href="#clicked"
                        onClick={e => e.preventDefault()}>
                        {el.value}
                    </a>
                </li>)}
        </ul>
    )
}

export default dropdownMenu;