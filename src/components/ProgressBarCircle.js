import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBarCircle.css';

import React from 'react'

const ProgressBarCircle = (props) => {
    const value = props['value'];

    const image_url = props['image'];

    if (Object.keys(props).length === 0) {
        return (
            <>
            
            </>
        )
    }

    return (
        <>
            <div className="token">
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: '50%', padding: '2px'}}>
                    <CircularProgressbar value={value} maxValue={1} strokeWidth={50} styles={buildStyles({trailColor: '#DED9BA', pathColor: '#003CFF', strokeLinecap: "butt"})} />
                    <div style={{ borderRadius: '50%', top: '0px', position: 'absolute', width: '100%', height: '100%', padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', alignContent: 'center' }}>
                        <div style={{margin: 'auto', borderRadius: '50%', top: '0px', backgroundColor: 'black', width: '97%', height: '97%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', alignContent: 'center'}}>
                            
                            <div style={{backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundImage: "url(" + image_url + ")", margin: 'auto', borderRadius: '50%', top: '0px', backgroundColor: 'black', width: '97%', height: '97%'}}>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div style={{left: '20%', top: '50%', position: 'absolute', backgroundColor: 'transparent', width: '100%', height: '50%', display: 'flex', flexDirection: 'column-reverse'}}>
                    <h1 className="outline" style={{ color: 'white', bottom: '200px', textAlign: 'end', padding: '0px', margin: '0px', fontSize: '50px'}}>{props['level']}</h1>
                </div>

                <div style={{ left: '0%', top: '50%', position: 'absolute', backgroundColor: 'transparent', width: 'auto', width: 'auto', height: '50%', display: 'flex', flexDirection: 'column-reverse'}}>
                    <h1 className="outline" style={{ color: 'white', bottom: '200px', textAlign: 'center', padding: '0px', margin: '0px', fontSize: '20px'}}>{props['name']}</h1>
                </div>

            </div>
        </>
    )
}

export default ProgressBarCircle