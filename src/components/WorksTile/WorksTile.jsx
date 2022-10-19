import React from 'react'

import './WorksTile.css'

const WorksTile = (props) => {
  return (
    <a 
      className='works_tile'
      href={props.link}
      target='_blank' 
      rel='noreferrer'
    >
        {props.children}
    </a>
  )
}

export default WorksTile