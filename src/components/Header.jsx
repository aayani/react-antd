import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

const Component = ({ theme, activeKey, menuItems }) => (
  <Menu
    theme={theme}
    mode="horizontal"
    defaultSelectedKeys={activeKey && [activeKey]}
    style={{ lineHeight: '64px' }}
  >
    {menuItems.map(menuItem => (
      <Menu.Item key={menuItem.key} onClick={menuItem.onClick}>
        {menuItem.value}
      </Menu.Item>
    ))}
  </Menu>
);

Component.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
  activeKey: PropTypes.string,
};

Component.defaultProps = {
  theme: 'dark',
  activeKey: null,
  menuItems: [],
};

export default Component;
