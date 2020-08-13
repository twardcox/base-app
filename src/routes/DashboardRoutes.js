import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';
import ErrorPage from '../containers/Error';
import PropTypes from 'prop-types';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: C, props: cProps, ...rest }) => {

  return (<Route
    {...rest}
    render={(props) =>
      <MainLayout childProps={cProps}>
        <C {...props} {...cProps} />
      </MainLayout>
    }
  />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

const Routes = ({ childProps }) => (
  <Switch>
    <DashboardRoute exact path='/' component={Home} props={childProps} />
    <DashboardRoute
      path='/dashboard'
      component={Home}
      props={childProps}
      exact
    />

    <DashboardRoute
      path='/about'
      component={About}
      props={childProps}
      exact
    />

    <DashboardRoute
      path='/contact'
      component={Contact}
      props={childProps}
      exact
    />

    <DashboardRoute
      path="/"
      component={Login}
      props={childProps}
      exact
    />

    <DashboardRoute
      path="/error"
      component={ErrorPage}
      exact
      props={childProps}
    />

    <EmptyRoute component={NotFound} />
  </Switch>
);

export default Routes;

DashboardRoute.propTypes = {
  component: PropTypes.elementType,
  props: PropTypes.object,
};

EmptyRoute.propTypes = {
  component: PropTypes.elementType,
  props: PropTypes.object,
};

Routes.propTypes = {
  childProps: PropTypes.object,
};
