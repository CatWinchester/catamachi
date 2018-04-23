import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Scale.module.scss'

const Scale = (props) => {
  return <div className={styles.scale}>
    {props.type}
  </div>
}

Scale.propTypes = {
  type: PropTypes.oneOf(['hunger', 'awakeness']).isRequired
}

export default Scale
