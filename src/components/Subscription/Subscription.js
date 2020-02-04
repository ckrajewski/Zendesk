import React from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Plan from '../Plan/Plan';
import UpdateSubscription from '../UpdateSubscription/UpdateSubscription';
import { fetchDefaultSubscriptionData, previewSubscriptionData } from '../../actions/action'; import './Subscription.css';

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

  isEmptyObject = obj => Object.entries(obj).length === 0 && obj.constructor === Object

  render() {
    const { savedSubscription, previewSubscription } = this.props;
    const {
      plan, seats, price, initialized,
    } = this.state;
    if (!initialized && !this.isEmptyObject(savedSubscription)) {
      this.setState({ ...savedSubscription, initialized: true });
      return (<div />);
    }
    const displayPrice = previewSubscription.price || price;
    return (
      <div styleName="layout">
        <div>
          <div> Plan </div>
          <Plan plan={plan} handleSelect={this.handlePlanSelect} />
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
  savedSubscription: state.default.subscriptionReducer.subscriptionData,
  previewSubscription: state.default.previewReducer.subscriptionData,
});

const mapDispatchToProps = dispatch => ({
  fetchDefaultSubscriptionData: () => dispatch(fetchDefaultSubscriptionData()),
  previewSubscriptionData: previewData => dispatch(previewSubscriptionData(previewData)),

});

export default connect(mapToStateProps, mapDispatchToProps)(Subscription);
