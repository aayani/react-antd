import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import logger from '../../../utils/logger';
import classes from '../../../assets/classes';

const Component = ({ message, onSubmit, submitting, initialValues }) => {
  const [form] = Form.useForm();

  const handleFailure = err => {
    logger.error(err, 'views/Login/components/LoginForm');
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onInvalid={handleFailure}
      className={classes.loginForm}
      initialValues={initialValues}
    >
      <Form.Item name="username">
        <Input
          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
          rules={[{ required: true, message: 'Please input your username' }]}
        />
      </Form.Item>

      <Form.Item name="password">
        <Input
          type="password"
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password"
          rules={[{ required: true, message: 'Please input your password' }]}
        />
      </Form.Item>

      <Form.Item className={message ? '' : classes.hidden}>{message}</Form.Item>

      <Form.Item>
        <Button type="link" className={classes.pullRight}>
          Forgot password
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={submitting}
          className={classes.block}
        >
          Log in
        </Button>
        Or
        <Button type="link">register now!</Button>
      </Form.Item>
    </Form>
  );
};

Component.propTypes = {
  message: PropTypes.string,
  submitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
};

Component.defaultProps = {
  message: null,
  submitting: false,
  initialValues: {
    username: '',
    password: '',
  },
};

export default Component;
