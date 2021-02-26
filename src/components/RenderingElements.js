import React from 'react'
import PropTypes from 'prop-types'

export default function RenderingElements(props){
    return (<h2>Rendering Elements using props: {props.date.toLocaleTimeString()}</h2>)
}

RenderingElements.propTypes = {
    date: PropTypes.instanceOf(Date())
}