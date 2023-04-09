import React, { forwardRef, useImperativeHandle } from 'react'
import { IonModal, IonIcon, IonInput, IonTabButton, IonTabBar} from '@ionic/react';
import { createSharp } from 'ionicons/icons';
import { useRef, useState } from 'react';

import StriveBanner from '../images/strive-banner.bmp';

import {getExerciseTimeRemaining, getExerciseStopwatchSuffix, secondsFormat, getExerciseTimeRemainingPercent} from '../save/Exercises';

import Timer from './Timer.js';
import Chip from './Chip.js';

import {motion, AnimatePresence, m} from 'framer-motion'

import './ExerciseEditModal.css';

/*
Reference: LetsCode 'React Modal With Animations' on YouTube
*/
const ExerciseEditModal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    })

    let timeRemaining = getExerciseTimeRemaining(props);
    let stopwatchSuffix = getExerciseStopwatchSuffix(props, timeRemaining);
    let timeRemainingColor = 240*getExerciseTimeRemainingPercent(props, timeRemaining);
    timeRemainingColor = 'hsl(' + timeRemainingColor + ',100%,50%)';

    return (
        
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="modal-backdrop"
                        initial={{
                            opacity: 1
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.2
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                //delay: 0.3
                            }
                        }}
                        onClick={() => setOpen(false)} 
                    />
                    
                    <motion.div 
                        className="modal-content-wrapper"
                        initial={{
                            scale: 0
                        }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.2
                            }
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                //delay: 0.0 //0.3
                            }
                        }}    
                    >
                        <div className="perform-button" style={{position: 'absolute', top: '250px', width: 'fit-content', height: 'fit-content'}} >
                            <div style={{width: 'fit-content' , height: '80px', borderRadius: '50px', overflow: 'hidden'}}>
                                <img onClick={() => console.log('ayo')} src={StriveBanner}/>
                            </div>
                            <div style={{top: '0px', opacity: '0', overflow: 'hidden', position: 'absolute', width: '100%', height: '100%', backgroundColor: 'red'}}>
                                <IonTabBar style={{height: '100%'}}>
                                    <IonTabButton tab='unu' href={'/PerformPage/' + props['id']}></IonTabButton>
                                </IonTabBar>
                            </div>
                        </div>
                        

                        <div className='modal-content-wrapper-inner' style={{overflow: 'hidden', width: '100%', height: '100%', borderRadius: '25px'}}>

                        
                        
                        <motion.div 
                            className="modal-content"
                            initial={{
                                //x: 100,
                                //opacity: 0
                            }}
                            animate={{
                                //x: 0,
                                //opacity: 1,
                                //transition: {
                                //    delay: 0.0,
                                //   duration: 0.2
                                //}
                            }}
                            exit={{
                                //x: 100,
                                //opacity: 0,
                                //transition: {
                                //    duration: 0.3
                                //}
                            }}
                        >

                            <div style={{cursor: 'pointer', overflow: 'hidden', border: '5px solid black', borderWidth: '3px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',width:'110%', height: '45px', backgroundImage: 'url(' + props['img'] + ')'}}>
                                
                                
                                <h1 style={{margin: '0px'}}>
                                    {props['name']}
                                </h1>

                                
                            </div>

                            {/*
                            <div style={{ width: '100%', height: '20%'}}>
                                <Timer stopwatchSuffix={stopwatchSuffix}>{secondsFormat(timeRemaining)}</Timer>
                            </div>
                            */}

                            <div style={{backgroundColor: 'rgb(22,22,22)', width: '110%', height: '40px', border: '5px solid black', borderWidth: '3px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <h1 style={{fontSize: '16px', margin: '0px', padding: '15px'}}>Scheduled: </h1>
                                {props['scheduled'] && <Chip onClick={() => console.log('This will toggle off')} color='hsl(120,100%,50%)'>YES</Chip>}
                                {!props['scheduled'] && <Chip onClick={() => console.log('This will toggle on')} color='hsl(0,100%,50%)'>NO</Chip>}
                            </div>

                            <div style={{backgroundColor: 'rgb(22,22,22)', width: '110%', height: '40px', border: '5px solid black', borderWidth: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <h1 style={{fontSize: '16px', margin: '0px'}}>Cooldown: </h1>
                            </div>

                            <div style={{backgroundColor: 'rgb(22,22,22)', width: '110%', height: '40px', border: '5px solid black', borderWidth: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <h1 style={{fontSize: '16px', margin: '0px'}}>Time Remaining: <strong style={{color: timeRemainingColor}}>{secondsFormat(timeRemaining)}</strong></h1>
                            </div>

                            <div style={{backgroundColor: 'rgb(22,22,22)', width: '110%', height: '80px', border: '5px solid black', borderWidth: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                
                                <div style={{backgroundColor: 'rgb(22,22,22)', width: '100%', height: '50%', border: '1px solid black', borderWidth: '1px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <h1 style={{fontSize: '16px', margin: '0px', paddingRight: '15px'}}>Streak:</h1>
                                    <Chip>{props['lifetimeGains']} Streak</Chip>
                                </div>

                                <h1 style={{fontSize: '16px', margin: '0px'}}>
                                    <Chip color='hsl(0,100%,50%)'>{props['lifetimeGains']*100/1000}% of Global Strive Points</Chip>
                                </h1>
                                
                            </div>
                            

                        </motion.div>

                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
})

export default ExerciseEditModal

