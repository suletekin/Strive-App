import { noop } from 'jquery'
import React from 'react'

const Chip = (props) => {
  return (
    <div>
        <div style={{height: '30%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div onClick={() => {!props['onClick'] ? noop(): props['onClick']()}} style={{maxWidth:'auto', margin: '0px', border: '2px solid black', width: 'min-content', whiteSpace: 'nowrap', padding: '5px', margin: '0px', color: 'white', backgroundColor: props['color'] ? props['color'] : 'lightblue', overflow: 'hidden', borderRadius: '20px'}}>
                <strong>
                    {props.children}    
                </strong>
            </div>
        </div>
    </div>
  )
}

export default Chip