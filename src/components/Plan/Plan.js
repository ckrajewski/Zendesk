import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// const cx = classNames.bind(styles);

export default class Plan extends React.Component {
  constructor(props) {
    super();
    debugger;
    this.state = {
      selectedPlan: null,
    };
  }

  handlePlanSelect = (event) => {
    debugger;
    const { handleSelect } = this.props;
    const selectedPlan = event.target.value;
    this.setState({ selectedPlan });
    handleSelect(selectedPlan);
  }

  render() {
    const { selectedPlan } = this.state;
    const { planNames, plan } = this.props;
    debugger;
    return (
      <div>
        <Select labelId="label" id="select" value={selectedPlan || plan} onChange={this.handlePlanSelect}>
          {planNames ? planNames.map(plan => (
            <MenuItem value={plan.value}>{plan.label}</MenuItem>)) : null }
        </Select>
      </div>
    );
  }
}
