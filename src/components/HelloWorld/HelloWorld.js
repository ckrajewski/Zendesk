import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchStuff } from '../../actions/action';
import styles from './HelloWorld.css';

const cx = classNames.bind(styles);

class HelloWorld extends React.Component {
  render() {
    const className = cx({
      notAnUglyBackground: true,
    });
    return (
      <div className={className}>
    Hello World!
      </div>
    );
  }
}

const mapToStateProps = state => ({
  data: state.weather,
});

const mapDispatchToProps = dispatch => ({
  fetchStuff: () => dispatch(fetchStuff()),
});


export default connect(mapToStateProps, mapDispatchToProps)(HelloWorld);
