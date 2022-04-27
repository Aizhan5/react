import React from 'react'
import './lightbulb.css'

function Lightbulb(props) {
  return <div className={`lightbulb ${props.toggleState}`}></div>
}

//className='lightbulb on' if props.toggleState === 'on'

export default Lightbulb



//if props.toggleState === 'on   then:
//className='lightbulb on'

//в реакте className вместо 