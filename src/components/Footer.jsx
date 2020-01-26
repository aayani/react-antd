import React from 'react';
import PropTypes from 'prop-types';

import classes from '../assets/classes';

const Component = ({ text }) => (
  <div className={classes.textCenter}>{text}</div>
);

Component.propTypes = { text: PropTypes.string };

Component.defaultProps = {
  text: `Ant Design ©${new Date().getFullYear()} Created by Ant UED`,
};

export default Component;
