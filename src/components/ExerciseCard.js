import React from 'react'
import './ExerciseCard.css'
import $ from 'jquery';
import jQuery from 'jquery';

import {getExerciseTimeRemaining, getExerciseStopwatchSuffix, getExerciseTimeRemainingPercent, secondsFormat} from '../save/Exercises';

import Timer from './Timer.js';
import Chip from './Chip.js';

$.fn.strech_text = function(){
    var elmt = jQuery(this),
        cont_width = elmt.width();
        
    if (jQuery(this).find('.stretch_it').length > 0) {
        var txt = jQuery(this).find('.stretch_it').html();
        jQuery(this).html(txt);
    } else {
        var txt = elmt.html();
    }

    var one_line = jQuery('<span class="stretch_it">' + txt + '</span>'),
        nb_char = elmt.text().length,
        spacing = cont_width/nb_char,
        txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width > cont_width) {
        var  char_width = txt_width/nb_char,
             ltr_spacing = spacing - char_width + (spacing - char_width)/nb_char ; 
  
        one_line.css({'letter-spacing': ltr_spacing});
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};


$(document).ready(function () {
    $('.stretch').each(function(){
        $(this).strech_text();
    });
});

jQuery(window).resize(function(){
    jQuery('.stretch').each(function(){
        jQuery(this).strech_text();
    });
});

function ExerciseCard(props) {

    let timeRemaining = getExerciseTimeRemaining(props);
    let stopwatchSuffix = getExerciseStopwatchSuffix(props, timeRemaining);

    

    let timeRemainingColor = 240*getExerciseTimeRemainingPercent(props);
    timeRemainingColor = 'hsl(' + timeRemainingColor + ',100%,50%)';

    return (
    <>
        <div className="bar" style={{marginTop: '5px', marginBottom: '10px', width: '100%', height: '10%', display: 'flex', justifyContent: 'center'}}>
            <div onClick={() => props['onClick'](props)} className="exercisecard" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginLeft: '10px', marginRight: '10px', width: '100%', height: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '85%', height: '85%', border: '2px solid black', borderRadius: '20px',backgroundImage: 'url(' + props['img'] + ')'}}>

                        <div style={{ width: '60%', height: '100%'}}>

                            <div style={{ width: '100%', height: '70%'}}>
                                <h1 style={{ fontSize: '25px', marginTop: '-4%', margin: '0px', width: '100%', height: '100%'}} className='stretch four'>
                                    {props['name']}
                                </h1>
                            </div>

                            <Chip>
                                {props['lifetimeGains'] + " Day Streak"}
                            </Chip>

                        </div>

                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Timer  stopwatchSuffix={stopwatchSuffix} style={{color: timeRemainingColor}}>
                                {secondsFormat(timeRemaining)}
                            </Timer>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ExerciseCard

/*
<h3 style={{color: '#888888', padding: '15px'}}>Last: {props['time']}</h3>
            */