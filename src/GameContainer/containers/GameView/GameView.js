import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCatImage } from './GameView.actions'
import Cat from '../../components/Cat/Cat'
import Room from '../../components/Room/Room'
import Scale from '../../components/Scale/Scale'
import styles from './GameView.module.scss'

class GameViewComponent extends Component {
  componentDidMount() {
    this.props.requestCatImage()
  }

  render() {
    const { catUrl, kitchen, bedroom } = this.props;

    return (
      <div className={styles.gameview}>
        <div className={styles.house}>
          <Room type="kitchen" food={kitchen.avialableFood}/>
          <Room type="bedroom" />
        </div>

        <Cat imageUrl={catUrl} />

        <div className={styles.scales}>
          <Scale type="hunger" amount={kitchen.hunger}/>
          <Scale type="awakeness" amount={bedroom.awakeness}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    catUrl: state.setCatImage.catImage,
    kitchen: state.setCatImage.catNeeds.kitchen,
    bedroom: state.setCatImage.catNeeds.bedroom,
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestCatImage: () => dispatch(getCatImage())
})

const GameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameViewComponent)

export default GameView;
