import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { playOutline, pauseOutline, checkmarkOutline, closeOutline, arrowBackOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import './AboutPage.css';
import ProgressBar from '../components/ProgressBar';
import { exercises } from '../save/Filesys';
import { write_json } from '../save/Filesys';


const PerformPage = ( {match, history} ) => {

  const [timeBased, setTimeBased] = useState(true);

  const [playing, setPlaying] = useState(false);

  const [exer, setExer] = useState({name: 'LOADING'});
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    // Get Exercise
    let exercise_id = match.url.slice(12 + 1); // trim off the first 8 characters from the url -> P e r f o r m P a g e /
    setExer(exercises[exercise_id]);
    setCompleted(exercises[exercise_id]['completed']);

    const counter_func = (counter) => {
      return function() {
        if (playing)
          counter ++;
          if (timeBased && counter >= exercises[exercise_id]['duration'] * 60) {
            counter = exercises[exercise_id]['duration'] * 60
          }
          exercises[exercise_id]['completed'] = counter;
          setCompleted(counter);
          write_json('exercises.json', exercises)
      };
    }
    if (exercises[exercise_id]['duration'] === undefined)
      counter_func(exercises[exercise_id]['completed'])();

    // Progress Bar Interval
    const interval_bar = setInterval(counter_func(exercises[exercise_id]['completed']), 1000);
    setTimeBased(exercises[exercise_id]['duration'] === undefined ? false : true);

    return () => {
      clearInterval(interval_bar);
      //setPlaying(false);
    };
  }, [match.url, playing]);

  useEffect(() => {
    return() => {
      //console.log('unmounted');
      setPlaying(false);
    }
  }, [exer])



  return (
    <IonPage id="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Strive!</p></IonTitle>
      </IonToolbar>
    </IonHeader>


    
    <IonContent>

      
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Strive!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div style={{backgroundColor: 'transparent', width: '100%', height: '100%'}}>
        <strong>
          <div style={{ backgroundColor: 'transparent', paddingTop: '15px', height: 'auto', width: '100%', top: 15, zIndex: 100}} >
            <p style={{ margin: '0px', textAlign: 'center', textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000', fontSize: '8vh', zIndex: 100}}>
              {exer['name']}
            </p>
            <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>Description: </h1>
            <h4 style={{paddingLeft: '20px', paddingRight: '20px', textAlign: 'center'}}>
              {exer['description']}
            </h4>
          </div>
        </strong>

        
        <div style={{padding: '20px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto'}}>
          <div onClick={() => {setPlaying(((!timeBased && exer['completed'] >= 1) || exer['completed'] >= exer['duration']*60 ) ? true : !playing)}} className="expandable" style={{border: '5px solid white', margin: 'auto', borderRadius: '70px', width: '250px', height: '250px', backgroundColor: 'black'}}>
            <IonIcon style={{width: '100%', height: '100%'}} src={ ((!timeBased && exer['completed'] >= 1) || exer['completed'] >= exer['duration']*60 ) ? checkmarkOutline : playing ? (timeBased ? pauseOutline : checkmarkOutline) : (timeBased ? playOutline : closeOutline)}></IonIcon>
          </div>
        </div>


        <strong>


          <div style={{ backgroundColor: 'transparent', padding: '15px', height: 'auto', width: '100%', top: 15, zIndex: 100}} >

            <ProgressBar bgcolor={"#ffd500"} completed={timeBased ? ((100*exer['completed']/(exer['duration']*60)).toFixed(2)) : Math.min(100*exer['completed'],100)}/>

          </div>

          <div  style={{marginTop: '10px', fontSize: '60px', height: '80px', width: '100%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <div onClick={() => {history.push('/HomePage');}} className="expandable" style={{ display: 'flex', alignItems: 'center',  width: 'auto', height: 'auto', backgroundColor: 'black', borderRadius: '20px', padding: '15px', border: '2px solid white'}}>
              <IonIcon   src={arrowBackOutline}/>
              Back
            </div>
          </div>
        </strong>
        


      </div>
      

      
    </IonContent>
  </IonPage>
  );
};

export default PerformPage;