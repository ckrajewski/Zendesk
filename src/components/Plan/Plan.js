import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// const cx = classNames.bind(styles);

export default class Plan extends React.Component {
  constructor(props) {
    super();
    debugger;
    this.state = {
      selectedPlan: props.plan,
    };
  }

  handlePlanSelect = (event) => {
    debugger;
    const { handleSelect } = this.props;
    const selectedPlan = event.target.value;
    this.setState({ selectedPlan });
    handleSelect(event.target.value);
  }

  render() {
    const { selectedPlan } = this.state;
    debugger;
    return (
      <div>
        <Select labelId="label" id="select" value={selectedPlan} onChange={this.handlePlanSelect}>
          <MenuItem value="good">Good</MenuItem>
          <MenuItem value="better">Better</MenuItem>
        </Select>
      </div>
    );
  }
}
