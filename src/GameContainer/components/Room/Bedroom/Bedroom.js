import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Room.module.scss'
import bedImage from './bed.png'

const Bedroom = ({onBedClick}) => {
  return<a className={styles.bed}
    onClick={(e)=>{ e.preventDefault(); onBedClick()}}>
    <img alt="bed" src={bedImage}/>
  </a>
}

Bedroom.propTypes = {
  onBedClick: PropTypes.func
}

export default Bedroom
