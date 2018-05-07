import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Room.module.scss'
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

Kitchen.propTypes = {
  food: PropTypes.object,
  onFoodClick: PropTypes.func
}

export default Kitchen
