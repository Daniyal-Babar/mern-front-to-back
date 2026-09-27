import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading } }) => {
  if (loading) return <div>Loading...</div>; // Or a Spinner component

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);