import React from 'react'
import PropTypes from 'prop-types'
import styles from './Room.module.scss'
import Kitchen from './Kitchen/Kitchen'

const Room = ( { type, food, onFoodClick } ) => {
  return <div className={`${styles.room} ${styles[type]}`}>
    <div className={styles.wall}>
      {
        type==='kitchen' && <Kitchen
          food={food}
          onFoodClick={onFoodClick}
        />
      }

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
