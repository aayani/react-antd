import React from 'react';

import LoginForm from './components/LoginForm';

import logger from '../../utils/logger';

const Component = () => {
  const [state, setState] = React.useState({
    message: null,
    submitting: false,
  });

  const doLogin = values => {
    logger.info(JSON.stringify(values), 'views/Login');
    setState({
      ...state,
      submitting: true,
    });
  };

  return (
    <>
      <LoginForm
        onSubmit={doLogin}
        submitting={state.submitting}
        message={state.message}
      />
    </>
  );
};

export default Component;
