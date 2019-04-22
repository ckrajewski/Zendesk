import React from 'react';
// import classNames from 'classnames/bind';
import './HelloWorld.css';

// const cx = classNames.bind(styles);

export default class HelloWorld extends React.Component {
  render() {
    /*
    const className = cx({
      notAnUglyBackground: true,
    });
    */
    return (
      <div styleName="notAnUglyBackground">
        Hello World!
      </div>
    );
  }
}
