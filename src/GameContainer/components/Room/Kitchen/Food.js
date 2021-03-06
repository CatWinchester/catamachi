import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Room.module.scss'
import {Animated} from "react-animated-css"

const Food = (props) => {
  const { type, onClick } = props;

  const URL = `https://www.themealdb.com/images/ingredients/${type}.png`
  return (
    <Animated
      animationIn="fadeInDown"
      animationOut="zoomOutLeft"
      animationInDelay={Math.random()*1000}
      animationOutDelay={Math.random()*1000}
      isVisible={true}
    >
      <a onClick={(e)=>{
        e.preventDefault()
        onClick()
      }} className={styles.food}>
        <img src={URL} alt='food-item'/>
      </a>
    </Animated>
  )
}

Food.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Food
