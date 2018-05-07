import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Room.module.scss'

const Bedroom = ({onBedClick}) => {
  return<a className={styles.bed}
    onClick={(e)=>{ e.preventDefault(); onBedClick()}}>
    <img src="https://cdn.pixabay.com/photo/2014/12/21/23/40/bed-575797_960_720.png"/>
  </a>
}

Bedroom.propTypes = {
  onBedClick: PropTypes.func
}

export default Bedroom
