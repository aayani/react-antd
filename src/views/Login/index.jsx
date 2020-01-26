import React from 'react';
import { Form } from 'antd';

import LoginForm from './components/LoginForm';

const FormView = Form.create()(LoginForm);

const Component = () => {
  const [message] = React.useState(null);
  const [submitting] = React.useState(false);

  const login = values => {
    console.log(values);
  };

  return (
    <div>
      <FormView onSubmit={login} submitting={submitting} message={message} />
    </div>
  );
};

export default Component;
