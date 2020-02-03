import React from 'react';
import Subscription from './components/Subscription/Subscription';
import styles from './App.css';

// const cx = classNames.bind(styles);

export default class App extends React.Component {
  render() {
    /*
    const className = cx({
      notAnUglyBackground: true,
    });
    */
    return (
      <div>
        <Subscription />
      </div>
    );
  }
}
