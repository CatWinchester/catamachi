import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cat from '../../components/Cat/Cat'
import Room from '../../components/Room/Room'
import styles from './GameView.module.scss'
import { getCatImage, increaseHunger, decreaseHunger, selectRoom } from './GameView.actions'

class GameViewComponent extends Component {
  componentDidMount() {
    this.props.requestCatImage()
    setInterval(this.props.increaseHunger, 10000)
    setInterval(this.props.increaseAwakness, 20000)
  }

  render() {
    const { catUrl, kitchen, bedroom, catName, decreaseHunger, currRoom, handleSelectRoom} = this.props;
    return (

      <div className={styles.gameview}>

        <div className="toolbar">
          <button className="button button--stats" onClick={()=>handleSelectRoom('stats')}>
            Stats
          </button>
          <button className="button button--kitchen" onClick={()=>handleSelectRoom('kitchen')}>
            Kitchen
          </button>
          <button className="button button--bedroom" onClick={()=>handleSelectRoom('bedroom')}>
            Bedroom
          </button>
          <button className="button button--playroom" onClick={()=>handleSelectRoom('playroom')}>
            Playroom
          </button>
          <button className="button button--playroom" onClick={()=>handleSelectRoom('work')}>
            Work
          </button>
        </div>

        <div className={styles.house}>
          <Room
            type={currRoom}
            kitchen={kitchen}
            bedroom={bedroom}
            onFoodClick={decreaseHunger}
          >
            <Cat imageUrl={catUrl} name={catName}/>
          </Room>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catUrl: state.catImage.catImage,
    catName: state.catImage.catName,
    kitchen: state.catNeeds.kitchen,
    bedroom: state.catNeeds.bedroom,
    currRoom: state.catImage.selectedRoom,
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
