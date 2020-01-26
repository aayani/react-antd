import React from 'react';
import PropTypes from 'prop-types';

export const StateContext = React.createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

export const useStateValue = () => React.useContext(StateContext);
