import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import classes from '../../../assets/classes';

const Component = ({ form, message, onSubmit, submitting }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className={classes.loginForm}>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>

      <Form.Item className={message ? '' : classes.hidden}>{message}</Form.Item>

      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
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
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  message: PropTypes.string,
};

Component.defaultProps = {
  submitting: false,
  message: null,
};

export default Component;
