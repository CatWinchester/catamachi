import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Cat.module.scss'

const Cat = (props) => {
  return <div className={styles.catContainer}>
    <div className={styles.cat}>
      <img src={props.imageUrl} alt="Here should be cat"/>
    </div>
    <h1>{props.name}</h1>
  </div>
}

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Cat
