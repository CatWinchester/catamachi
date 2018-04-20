import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Cat = (props) => {
  return <img src={props.imageUrl} alt="Here should be cat"/>
}

Cat.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default Cat
