import { useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useGoBack = () => {
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

  return goBack;
};

export default useGoBack;
