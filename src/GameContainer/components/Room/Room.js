import React from 'react'
import PropTypes from 'prop-types'
import styles from './Room.module.scss'
import Food from './Food'

const Kitchen = (props) => {
  const foodItems = props.food.map((item, index) => {
    const temp = []
    for (var j=0; j<item.amount; j++) {
       temp.push(<Food type={item.name} key={index+'food'+j}/>)
    }
    return temp
  })

  return <div className={styles.refrigirator}> {foodItems} </div>
}

const Room = (props) => {
  const { type, food } = props;

  return <div className={`${styles.room} ${styles[type]}`}>
    {type==='kitchen' && <Kitchen food={food} />}
  </div>
}

Room.propTypes = {
  type: PropTypes.oneOf(['kitchen', 'bedroom']).isRequired,
  food: PropTypes.array
}

export default Room
