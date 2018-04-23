import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Room.module.scss'
import {Animated} from "react-animated-css"

const Food = (props) => {
  const { type, amount } = props;

  const URL = `https://www.themealdb.com/images/ingredients/${type}.png`
  return (
    <Animated
      animationIn="fadeInDown"
      animationInDelay={Math.random()*1500}
      animationOut="fadeIn"
      isVisible={true}
    >
      <div className={styles.food}>
        <img src={URL} alt='food-item'/>
      </div>
    </Animated>
  )
}

Food.propTypes = {
  type: PropTypes.oneOf([
    'tomato',
    'pork',
    'chicken'
  ])
}

export default Food
