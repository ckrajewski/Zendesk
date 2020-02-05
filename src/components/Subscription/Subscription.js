import React from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Plan from '../Plan/Plan';
import UpdateSubscription from '../UpdateSubscription/UpdateSubscription';
import { fetchDefaultSubscriptionData, previewSubscriptionData } from '../../actions/action'; import './Subscription.css';
import { areSubscriptionsEqual, isEmptyObject } from '../../Utils';

// const cx = classNames.bind(styles);

class Subscription extends React.Component {
  constructor() {
    super();
    this.state = {
      plan: null,
      seats: null,
      price: null,
      initialized: false,
    };
  }

  componentDidMount() {
    const { fetchDefaultSubscriptionData } = this.props;
    fetchDefaultSubscriptionData();
  }

  handlePlanSelect = (plan) => {
    this.setState({ plan }, () => {
      const { plan, seats } = this.state;
      const { previewSubscriptionData } = this.props;
      previewSubscriptionData({ plan, seats });
    });
  }

  handleSeatChange = (event) => {
    const seats = event.target.value;
    this.setState({ seats }, () => {
      const { plan, seats } = this.state;
      const { previewSubscriptionData } = this.props;
      previewSubscriptionData({ plan, seats });
    });
  }

  render() {
    const { savedSubscription, previewSubscription, planNames } = this.props;
    debugger;
    const {
      plan, seats, price, initialized,
    } = this.state;

    if (!initialized && !isEmptyObject(savedSubscription)) {
      if (!isEmptyObject(previewSubscription)) {
        this.setState({ ...previewSubscription, initialized: true });
      } else {
        this.setState({ ...savedSubscription, initialized: true });
      }
      return (<div />);
    }
    const displayPrice = previewSubscription.price || price;

    return (
      <div styleName="layout">
        <div>
          <div> Plan </div>
          <Plan plan={plan} planNames={planNames} handleSelect={this.handlePlanSelect} />
        </div>
        <div>
          <div> Seats </div>
          <input value={seats} onChange={this.handleSeatChange} />
        </div>
        <div>
          <div> Price </div>
          <div>
            {displayPrice}
          </div>
        </div>
        <UpdateSubscription
          savedSubscription={savedSubscription}
          previewSubscription={previewSubscription}
        />
      </div>
    );
  }
}

const mapToStateProps = state => ({
  savedSubscription: state.default.initialSubscriptionReducer.subscription,
  planNames: state.default.initialSubscriptionReducer.planNames,
  previewSubscription: state.default.previewReducer.subscription,
});

const mapDispatchToProps = dispatch => ({
  fetchDefaultSubscriptionData: () => dispatch(fetchDefaultSubscriptionData()),
  previewSubscriptionData: previewData => dispatch(previewSubscriptionData(previewData)),

});

export default connect(mapToStateProps, mapDispatchToProps)(Subscription);
