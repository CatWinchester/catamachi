import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Room.module.scss'

const Room = (props) => {
  return <div className={styles.room}>
    {props.type}
  </div>
}

Room.propTypes = {
  type: PropTypes.oneOf(['kitchen', 'bedroom']).isRequired
}

export default Room
