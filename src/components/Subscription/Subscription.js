import React from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Plan from '../Plan/Plan';
import { fetchDefaultSubscriptionData } from '../../actions/action'; import './Subscription.css';

// const cx = classNames.bind(styles);

class Subscription extends React.Component {
  constructor() {
    super();
    this.state = {
      plan: 'Good',
      seats: 4,
      price: 50,
    };
  }

  componentDidMount() {
    const { fetchDefaultSubscriptionData } = this.props;
    fetchDefaultSubscriptionData();
  }

  handlePlanSelect = (plan) => {
    debugger;
    this.setState({ plan });
  }

  isEmptyObject = obj => Object.entries(obj).length === 0 && obj.constructor === Object

  render() {
    const { currentSavedSubscription } = this.props;
    debugger;
    if (this.isEmptyObject(currentSavedSubscription)) {
      return (<div />);
    }
    return (
      <div styleName="layout">
        <div>
          <div> Plan </div>
          <Plan defaultPlan={currentSavedSubscription.plan} handleSelect={this.handlePlanSelect} />
        </div>
        <div>
          <div> Seats </div>
          <input />
        </div>
        <div>
          <div> Price </div>
          <div> 50 </div>
        </div>
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  debugger;
  return ({
    currentSavedSubscription: state.data.subscriptionData,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchDefaultSubscriptionData: () => dispatch(fetchDefaultSubscriptionData()),
});

export default connect(mapToStateProps, mapDispatchToProps)(Subscription);
