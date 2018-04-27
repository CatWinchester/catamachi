import React from 'react'
import PropTypes from 'prop-types'
import styles from './Scale.module.scss'

const Point = () => {
  return <div className={styles.point}></div>
}

const Scale = (props) => {
  const points = []
  for(var i=0; i<props.amount;i++) {
    points.push(<Point key={'point_'+i} />)
  }
  return <div className={styles.scale}>
    <h2>{props.type}</h2>
    <h3>{props.amount}%</h3>
    <div className={styles.points}> {points} </div>
  </div>
}

Scale.propTypes = {
  type: PropTypes.oneOf(['hunger', 'awakeness']).isRequired
}

export default Scale
