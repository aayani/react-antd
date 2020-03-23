import React from 'react';

import 'antd/dist/antd.css';

import { StateProvider } from './config/store';

import Router from './Router';

const Component = () => (
  <StateProvider>
    <Router />
  </StateProvider>
);

export default Component;
