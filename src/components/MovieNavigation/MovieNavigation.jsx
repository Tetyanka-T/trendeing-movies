import { useRouteMatch, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import s from './MovieNavigation.module.css';

export default function MovieNavigation() {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <div>
      <h2>Additional information:</h2>

      <ul className={s.list}>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
