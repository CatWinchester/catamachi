import React from 'react'
import PropTypes from 'prop-types'
import styles from './Cat.module.scss'

const Cat = (props) => {
  return <div className={styles.catContainer}>
    <a className={styles.cat} alt={props.name}>
      {/* <img src={props.imageUrl} alt="Here should be cat"/> */}
    </a>
  </div>
}

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Cat
