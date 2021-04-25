import { NavLink } from 'react-router-dom';

const navigationItem = ({ children, link, exact, active }) => <li>
    <NavLink
        to={link}
        exact={exact}
        activeClassName={active}>
        {children}
    </NavLink>
</li>;

export default navigationItem;