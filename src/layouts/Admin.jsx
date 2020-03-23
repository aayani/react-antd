import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Alert } from 'antd';

import Header from '../components/Header';
import Footer from '../components/Footer';

import routes from '../routes';
import classes from '../assets/classes';

const Component = ({ location, menuItems, activeKey }) => {
  const currRoute = routes.find(
    route =>
      route.layout.toLowerCase() === '/admin' &&
      location.pathname.toLowerCase() ===
        `${route.layout}${route.path}`.toLowerCase()
  );
  const View = currRoute ? currRoute.component : () => <></>;

  return (
    <Layout className={classes.fullHeight}>
      <Layout.Header>
        <Header activeKey={activeKey} menuItems={menuItems} />
      </Layout.Header>

      <Layout.Content>
        <Alert.ErrorBoundary>
          <View />
        </Alert.ErrorBoundary>
      </Layout.Content>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

Component.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  activeKey: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};

Component.defaultProps = {
  activeKey: null,
  menuItems: [],
};

export default Component;
