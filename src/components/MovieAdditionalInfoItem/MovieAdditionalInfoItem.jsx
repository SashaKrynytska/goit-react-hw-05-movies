import { NavLink } from 'react-router-dom';
import css from './MovieAdditionalInfoItem.module.css';

const infoLinks = [
  {
    to: 'cast',
    title: 'Cast',
  },
  {
    to: 'reviews',
    title: 'Reviews',
  },
];

export const MovieAdditionalInfoItem = () => {
  return (
    <div className={css.infoWrapper}>
      <h3 className={css.infoTitle}>Additional information</h3>
      <ul className={css.infoList}>
        {infoLinks.map(({ to, title }) => (
          <li className={css.infoItem} key={title}>
            <NavLink
              className={({ isActive }) => (isActive ? css.nav_active : null)}
              to={to}
              replace
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieAdditionalInfoItem;
