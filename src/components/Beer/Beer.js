import React from 'react';
import styles from './Beer.css';

export default class Beer extends React.Component {
  render() {
    const { name, img } = this.props;
    return (
      <div className={styles.beerContainer}>
        <div className={styles.img}>
          <img src={img} className={styles.img} alt="" />
          <div className={styles.name}>
            {name}
          </div>
        </div>
      </div>
    );
  }
}
