import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

export const Store = createContext(); //nos permite transmitir y usar (consumir) datos en cualquier componente que necesitemos en nuestra aplicación

const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true }; //extrae todas proíedades crea un nueva copia pero no apunta a la misma memoria
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
