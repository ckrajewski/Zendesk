import React from 'react';
import { connect } from 'react-redux';
import Subscription from './components/Subscription/Subscription';
import SubmittedScreen from './components/SubmittedScreen/SubmittedScreen';
import styles from './App.css';

const Components = {
  Subscription,
  SubmittedScreen,
};

const App = ({ page }) => {
  const Component = Components[page];
  return <Component />;
};

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(App);
