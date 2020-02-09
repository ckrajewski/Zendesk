import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './Plan.css';

export default class Plan extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedPlan: null,
    };
  }

  handlePlanSelect = (event) => {
    const { handleSelect } = this.props;
    const selectedPlan = event.target.value;
    this.setState({ selectedPlan });
    handleSelect(selectedPlan);
  }

  render() {
    const { selectedPlan } = this.state;
    const { planNames, plan } = this.props;
    return (
      <div>
        <div styleName="label">
          <InputLabel>
            Plan
          </InputLabel>
        </div>
        <Select labelId="label" id="select" value={selectedPlan || plan} onChange={this.handlePlanSelect}>
          {planNames ? planNames.map(plan => (
            <MenuItem value={plan.value}>{plan.label}</MenuItem>)) : null }
        </Select>
      </div>
    );
  }
}
