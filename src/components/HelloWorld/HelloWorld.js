import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchStuff } from "../../actions/action";
import classNames from 'classnames/bind';
import styles from "./HelloWorld.css";

let cx = classNames.bind(styles);

class HelloWorld extends React.Component {

  render() {
    let className = cx({
      notAnUglyBackground:true,
    });
  	return (
    <div className={className}>
    Hello World!
     </div> 
    );
  }
}

const mapToStateProps = (state) => {
    return {
      data: state.weather
    };
  };

const mapDispatchToProps = dispatch => ({
  fetchStuff: () => dispatch(fetchStuff())
});


export default connect(mapToStateProps,mapDispatchToProps)(HelloWorld);