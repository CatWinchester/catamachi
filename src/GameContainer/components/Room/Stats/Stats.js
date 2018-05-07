import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Room.module.scss'
import Scale from './Scale/Scale'

const Stats = ({hunger, awakeness}) => {
  return <div className={styles.scales}>
    <Scale type="hunger" amount={hunger}/>
    <Scale type="awakeness" amount={awakeness}/>
  </div>
}

Stats.propTypes = {
  hunger: PropTypes.string,
  awakeness: PropTypes.string,
  coins: PropTypes.number
}

export default Stats
