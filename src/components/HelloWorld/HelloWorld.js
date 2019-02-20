import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchStuff } from "../../actions/action";
import "./HelloWorld.css";
class HelloWorld extends React.Component {

  render() {
  	return (
    <div className="notAnUglyBackground">
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