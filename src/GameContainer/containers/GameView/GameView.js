import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cat from '../../components/Cat/Cat'
import Room from '../../components/Room/Room'
import Scale from '../../components/Scale/Scale'
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
            bedroom
          </button>
          <button className="button button--playroom" onClick={()=>handleSelectRoom('playroom')}>
            Playroom
          </button>
        </div>

        <div className={styles.house}>
          <Room
            type={currRoom}
            food={kitchen.avialableFood}
            onFoodClick={decreaseHunger}
          />

        </div>

        <Cat imageUrl={catUrl} name={catName}/>
        {false && <div className={styles.scales}>
          <Scale type="hunger" amount={kitchen.hunger}/>
          <Scale type="awakeness" amount={bedroom.awakeness}/>
        </div>}
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
