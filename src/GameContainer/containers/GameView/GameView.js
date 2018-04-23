import React, { Component } from 'react'
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
    return (
      <div className={styles.gameview}>
        <div className={styles.house}>
          <Room type="kitchen" />
          <Room type="bedroom" />
        </div>

        <Cat imageUrl={this.props.catUrl} />

        <div className={styles.scales}>
          <Scale type="hunger" />
          <Scale type="awakeness" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catUrl: state.setCatImage.catImage
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
