import React from 'react';

export default class Beer extends React.Component {
  render() {
    const { name, img } = this.props;
    return (
      <div>
        <div className="beerImage">
          <img src={img} className="img" alt="" />
        </div>
        <div className="beer">
          {name}
        </div>
      </div>
    );
  }
}
