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
import { fetchCurrentSubscriptionData, previewSubscriptionData } from '../../actions/action';
import { areSubscriptionsEqual, isEmptyObject } from '../../Utils';
import './Subscription.css';

/*
  Default landing screen
  Renders subscription screen
*/
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
    const { fetchCurrentSubscriptionData } = this.props;
    fetchCurrentSubscriptionData();
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
              <div styleName="center">
                <Plan plan={plan} planNames={planNames} handleSelect={this.handlePlanSelect} />
              </div>
              <div styleName="center">
                <div styleName="label">
                  <InputLabel>
                    Seats
                  </InputLabel>
                </div>
                <TextField
                  id="standard-number"
                  type="number"
                  value={seats}
                  onChange={this.handleSeatChange}
                  inputProps={{ min: 1 }}
                />
              </div>
              <div styleName="center">
                <div styleName="label">
                  <InputLabel>
                    Price
                  </InputLabel>
                </div>
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
  savedSubscription: state.default.currentSubscriptionReducer.subscription,
  planNames: state.default.currentSubscriptionReducer.planNames,
  previewSubscription: state.default.previewSubscriptionReducer.subscription,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentSubscriptionData: () => dispatch(fetchCurrentSubscriptionData()),
  previewSubscriptionData: previewData => dispatch(previewSubscriptionData(previewData)),

});

export default connect(mapToStateProps, mapDispatchToProps)(Subscription);
