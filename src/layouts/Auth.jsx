import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Layout } from 'antd';

import Footer from '../components/Footer';

import routes from '../routes';
import classes from '../assets/classes';

const Component = ({ location }) => {
  const currRoute = routes.find(
    route =>
      route.layout.toLowerCase() === '/auth' &&
      location.pathname.toLowerCase() ===
        `${route.layout}${route.path}`.toLowerCase()
  );
  const View = currRoute ? currRoute.component : () => <></>;

  return (
    <Layout className={classes.fullHeight}>
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
};

export default Component;
