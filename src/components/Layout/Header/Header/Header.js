import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { routes } from '../../../../routes';

const headerItems = [
  { id: 'home', name: 'Home', route: routes.HOME },
  { id: 'movies', name: 'Movies', route: routes.MOVIES },
];

export const Header = () => {
  return (
    <nav className={s.nav}>
      <Link to={routes.HOME}>MOVIES</Link>
      <ul>
        {headerItems &&
          headerItems.map(({ id, name, route }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) => (isActive ? s.nav_active : null)}
                to={route}
              >
                {name}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
