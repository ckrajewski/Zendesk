import React from 'react';
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Plan from '../Plan/Plan';
import UpdateSubscription from '../UpdateSubscription/UpdateSubscription';
import { fetchDefaultSubscriptionData, previewSubscriptionData } from '../../actions/action';
import { areSubscriptionsEqual, isEmptyObject } from '../../Utils';
import './Subscription.css';
// const cx = classNames.bind(styles);

class Subscription extends React.Component {
  constructor() {
    super();
    this.state = {
      plan: null,
      seats: null,
      price: 0,
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
    const displayPrice = (previewSubscription.price === 0 || previewSubscription.price)
      ? previewSubscription.price : price;

    return (
      <div>
        <div styleName="header">
          <Typography variant="h6">
          Subscription
          </Typography>
        </div>
        <div styleName="border-layout">
          <div styleName="border">
            <div styleName="layout">
              <div>
                <Plan plan={plan} planNames={planNames} handleSelect={this.handlePlanSelect} />
              </div>
              <div>
                <InputLabel>
                  Seats
                </InputLabel>
                <TextField
                  id="standard-number"
                  type="number"
                  value={seats}
                  onChange={this.handleSeatChange}
                />
              </div>
              <div>
                <InputLabel>
                  Price
                </InputLabel>
                <div>
                  <Typography variant="body1">
                    <CurrencyFormat prefix="$" value={displayPrice} displayType="text" thousandSeparator />
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div styleName="alignRight">
            <UpdateSubscription
              savedSubscription={savedSubscription}
              previewSubscription={previewSubscription}
            />
          </div>
        </div>
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
