import React from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';

const StateContext = React.createContext();
const initialState = {
  loading: true,
  me: null,
};

export const useStateValue = () => React.useContext(StateContext);

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
