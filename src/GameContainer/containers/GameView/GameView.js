import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cat from '../../components/Cat/Cat'
import Room from '../../components/Room/Room'
import Stats from '../../components/Stats/Stats'
import styles from './GameView.module.scss'
import { getCatImage, increaseHunger, decreaseHunger, selectRoom } from './GameView.actions'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class GameViewComponent extends Component {
  componentDidMount() {
    this.props.requestCatImage()
    setInterval(this.props.increaseHunger, 10000)
    setInterval(this.props.increaseAwakness, 20000)
  }
  render() {
    const { catUrl, kitchen, bedroom, catName, decreaseHunger, handleSelectRoom} = this.props;

    const _renderRooByPath = ({match, ...props}) => (
      <Room
        type={match.path.slice(1) || 'kitchen' }
        kitchen={kitchen}
        bedroom={bedroom}
        onFoodClick={decreaseHunger}
      >
        <Cat imageUrl={catUrl} name={catName}/>
      </Room>
    )
    return (
      <Router>
        <div className={styles.gameview}>

          <div className="toolbar">
            <Link to='/stats'><button>Stats</button></Link>
            <Link to='/kitchen'><button> Kitchen </button></Link>
            <Link to='/bedroom'><button> Bedroom </button></Link>

            <button onClick={()=>handleSelectRoom('playroom')}>
              Playroom
            </button>
            <button onClick={()=>handleSelectRoom('work')}>
              Work
            </button>
          </div>

          <div className={styles.house}>
            <Route exact path="/" render={_renderRooByPath} />
            <Route path="/bedroom" render={_renderRooByPath} />
            <Route path="/kitchen" render={_renderRooByPath} />
            <Route path="/stats" render={()=>(
              <Stats awakeness={bedroom.awakeness} hunger={kitchen.hunger}/>
            )}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catUrl: state.catImage.catImage,
    catName: state.catImage.catName,
    kitchen: state.catNeeds.kitchen,
    bedroom: state.catNeeds.bedroom
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestCatImage: () => dispatch(getCatImage()),
  increaseHunger: () => dispatch(increaseHunger()),
  decreaseHunger: (foodName) => dispatch(decreaseHunger(foodName)),
  handleSelectRoom: (name) => dispatch(selectRoom(name))
})

const GameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameViewComponent)

export default GameView;
