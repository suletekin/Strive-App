import React from 'react'


function Timer(props) {
    let stopwatchSuffix = ''
    if (props['stopwatchSuffix']) {
        stopwatchSuffix = props['stopwatchSuffix']
    }

    return (
        <div style={props['style'] ? {...props['style']} : null}>
            <div style={{position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center', width: '40%', height: '100%'}}>
                <div style={{ width: '20vh', maxWidth: '300%'}}/>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'absolute', width: '100%', height: '100%'}}>
                    <h1 style={{ fontSize: '27px', width: '100%', position: 'absolute',margin: '0%', textAlign:'center', whiteSpace: 'nowrap'}}>
                        {props.children}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Timer