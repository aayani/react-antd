import React from 'react';

import 'antd/dist/antd.css';

import reducer from './config/reducer';
import { StateProvider } from './config/state';

import Router from './Router';

const Component = () => {
  const initialState = {
    loading: true,
    me: null,
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router />
    </StateProvider>
  );
};

export default Component;
