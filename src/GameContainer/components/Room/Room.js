import React from 'react'
import PropTypes from 'prop-types'
import styles from './Room.module.scss'
import Food from './Food'

const Kitchen = ({food, onFoodClick}) => {
  const foodItems  = []
  for(let key in food) {
    for(var i=0; i<food[key]; i++){
      foodItems.push(
        <Food
          type={key}
          onClick={()=>onFoodClick(key)}
          key={i+'fooditem'+key}
        />
      )
    }
  }

  return <div className={styles.refrigirator}> {foodItems} </div>
}

const Room = ( { type, food, onFoodClick } ) => {
  return <div className={`${styles.room} ${styles[type]}`}>
    <div className={styles.wall}>
      {type==='kitchen' && <Kitchen food={food} onFoodClick={onFoodClick}/>}

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
