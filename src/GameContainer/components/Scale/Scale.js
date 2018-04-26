import React from 'react'
import PropTypes from 'prop-types'
import styles from './Scale.module.scss'

const Scale = (props) => {
  return <div className={styles.scale}>
    <h3>
      {props.type}
    </h3>
    {props.amount}%
  </div>
}

Scale.propTypes = {
  type: PropTypes.oneOf(['hunger', 'awakeness']).isRequired
}

export default Scale
