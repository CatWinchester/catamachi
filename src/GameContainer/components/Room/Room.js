import React from 'react'
import PropTypes from 'prop-types'
import styles from './Room.module.scss'
import Kitchen from './Kitchen/Kitchen'
import Bedroom from './Bedroom/Bedroom'

const Room = ( { type, food, onFoodClick } ) => {
  let selectedRoom = {};

  switch(type) {
    case 'kitchen': {
      selectedRoom = <Kitchen
        food={food}
        onFoodClick={onFoodClick}
      />

      break;
    }
    case 'bedroom': {
      selectedRoom = <Bedroom />
    }
  }

  return <div className={`${styles.room} ${styles[type]}`}>
    <div className={styles.wall}>
      {selectedRoom}
    </div>
    <div className={styles.floor}></div>
  </div>
}

Room.propTypes = {
  type: PropTypes.oneOf(['kitchen', 'bedroom']).isRequired,
  food: PropTypes.object,
  onFoodClick: PropTypes.func
}

export default Room
