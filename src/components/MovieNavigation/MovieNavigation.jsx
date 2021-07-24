import { useRouteMatch, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// import styles from './MovieNavigation.module.scss';

export default function MovieNavigation() {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <div>
      <h2>Additional information:</h2>

      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`, // Формирует путь для ссылки
              state: { ...location.state }, // Передает полученый стейт при переходе на актёров
            }}
            // className={styles.link}
            // activeClassName={styles['link--active']}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`, // Формирует путь для ссылки
              state: { ...location.state }, // Передает полученый стейт при переходе на обзоры
            }}
            // className={styles.link}
            // activeClassName={styles['link--active']}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

// MovieNavigation.propTypes = {
//   url: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired,
// };
