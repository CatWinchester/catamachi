import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Cat.module.scss'

const Cat = (props) => {
  return <div className={styles.cat}>
    <img src={props.imageUrl} alt="Here should be cat"/>
  </div>
}

Cat.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default Cat
