import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cat from '../../components/Cat/Cat'
import Room from '../../components/Room/Room'
import Scale from '../../components/Scale/Scale'
import styles from './GameView.module.scss'
import { getCatImage, increaseHunger } from './GameView.actions'

class GameViewComponent extends Component {
  componentDidMount() {
    this.props.requestCatImage()
    setInterval(this.props.increaseHunger, 10000)
  }

  render() {
    const { catUrl, kitchen, bedroom, catName } = this.props;

    return (
      <div className={styles.gameview}>
        <div className={styles.house}>
          <Room type="kitchen" food={kitchen.avialableFood}/>
          <Room type="bedroom" />
        </div>

        <Cat imageUrl={catUrl} name={catName}/>

        <div className={styles.scales}>
          <Scale type="hunger" amount={kitchen.hunger}/>
          <Scale type="awakeness" amount={bedroom.awakeness}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    catUrl: state.catImage.catImage,
    catName: state.catImage.catName,
    kitchen: state.catNeeds.kitchen,
    bedroom: state.catNeeds.bedroom,
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestCatImage: () => dispatch(getCatImage()),
  increaseHunger: () => dispatch(increaseHunger())
})

const GameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameViewComponent)

export default GameView;
