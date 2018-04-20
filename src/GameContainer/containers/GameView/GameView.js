import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './GameView.module.css'
import Cat from '../../components/Cat/Cat'

import { getCatImage } from './GameView.actions'

class GameViewComponent extends Component {
  componentDidMount() {
    this.props.requestCatImage()
  }

  render() {
    return (
      <div className={styles.gameview}>
        <Cat imageUrl={this.props.catUrl} />
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
