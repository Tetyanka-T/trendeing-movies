import { useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import s from './GoBack.module.css';

const ComeBackButton = () => {
  const history = useHistory();
  const location = useLocation();
  const routerState = useRef(null);

  useEffect(() => {
    if (!routerState.current) {
      routerState.current = location.state;
    }
  }, [location.state]);

  const goBack = () => {
    const url = routerState.current ? `?${routerState.current.params}` : '/';
    history.push(url);
  };

  return (
    <button
      type="button"
      className={s.button_comeBack}
      onClick={() => goBack()}
    >
      Back
    </button>
  );
};

export default ComeBackButton;
