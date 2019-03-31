import React from 'react';
import { connect } from 'react-redux';
import { fetchBeer } from '../../actions/action';
import Beer from '../Beer/Beer';
import styles from './HelloWorld.css';

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', event => this.infiniteScroll(event));
    const { fetchBeer } = this.props;
    fetchBeer();
  }

  infiniteScroll = (event) => {
    const { fetchBeer, beer } = this.props;
    const { currentTarget } = event;
    const yOffset = currentTarget.scrollY;
    const { scrollHeight } = document.body;
    if (scrollHeight - yOffset < 2500) {
      this.setState(oldState => ({ beers: [...oldState.beers].concat([...beer]) }), fetchBeer());
    }
  }

  render() {
    const { beers } = this.state;
    const { beer } = this.props;
    const beerList = beer ? [...beer].concat([...beers]) : [];
    return (
      <div className={styles.beerGrid}>
        {beerList.length > 0
          ? beerList.map(beer => <Beer img={beer.image_url} name={beer.name} />) : null}
      </div>
    );
  }
}

const mapToStateProps = state => ({
  beer: state.data.beer,
});

const mapDispatchToProps = dispatch => ({
  fetchBeer: () => dispatch(fetchBeer()),
});


export default connect(mapToStateProps, mapDispatchToProps)(HelloWorld);
