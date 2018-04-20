import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './GameView.module.css'

import { getCatImage } from './GameView.actions'

class GameViewComponent extends Component {
  componentDidMount() {
    this.props.requestCatImage()
  }

  render() {
    const { store } = this.context
    return (
      <div className={styles.gameview}>
        Gameview
        <img src={this.props.catUrl} alt="Here should be cat"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.setCatImage)
  return {
    catUrl: state.setCatImage.catImage
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestCatImage: () => dispatch(getCatImage())
})

GameViewComponent.contextTypes = {
  store: PropTypes.object
}

const GameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameViewComponent)

export default GameView;
