import React from 'react'
import PropTypes from 'prop-types'
import styles from './Room.module.scss'
import Kitchen from './Kitchen/Kitchen'
import Bedroom from './Bedroom/Bedroom'
import Stats from './Stats/Stats'

const Room = ( { type, kitchen, bedroom, onFoodClick, children } ) => {
  let selectedRoom = {};

  switch(type) {
    case 'kitchen': {
      selectedRoom = <Kitchen
        food={kitchen.avialableFood}
        onFoodClick={onFoodClick}
      />
      break;
    }
    case 'bedroom': {
      selectedRoom = <Bedroom />
      break;
    }
    // case 'stats': {
    //   selectedRoom = <Stats
    //     awakeness={bedroom.awakeness}
    //     hunger={kitchen.hunger}
    //   />
    // }
  }

  return <div className={`${styles.room} ${styles[type]}`}>
    <div className={styles.wall}>
      {selectedRoom}
      {children}
    </div>
    <div className={styles.floor}></div>
  </div>
}

Room.propTypes = {
  type: PropTypes.oneOf(['kitchen', 'bedroom', 'stats']).isRequired,
  kitchen: PropTypes.object,
  onFoodClick: PropTypes.func,
}

export default Room
