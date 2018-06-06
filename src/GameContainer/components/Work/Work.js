import React from 'react'
import PropTypes from 'prop-types'
import styles from './Work.module.scss'

//Big clickable red button
const Work = (props) => {
  return <div>
    <h1>Work</h1>
    <p>clicks: {props.clicks}</p>
    <button className={styles.big_red_button}
       onClick={()=>props.handleBtnClick()}>Big red button</button>
  </div>
}

Work.propTypes = {
  handleBtnClick: PropTypes.func
}

export default Work
