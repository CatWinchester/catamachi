import React, { Component } from 'react'
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
  const { type } = props;

  var currentFood = [
    {
      name: 'tomato',
      amount: 4
    }, {
      name: 'pork',
      amount: 1
    }, {
      name: 'chicken',
      amount: 2
    }
  ]

  return <div className={`${styles.room} ${styles[type]}`}>
    {type==='kitchen' && <Kitchen food={currentFood} />}
  </div>
}

Room.propTypes = {
  type: PropTypes.oneOf(['kitchen', 'bedroom']).isRequired,
  food: PropTypes.array
}

export default Room
