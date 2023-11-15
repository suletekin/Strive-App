import { IonContent, IonPage, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonMenuToggle, IonButton } from '@ionic/react';
import { trashBin} from 'ionicons/icons';
import ExerciseCard from '../components/ExerciseCard';
import ExerciseEditModal from '../components/ExerciseEditModal';
import {exercises} from '../save/Filesys';
import { useState, useRef, useEffect } from 'react';

//We want the exercisecards to change depending on what i type in

//This is more of a stretch goal:
  //We only want the search bar to show up if there are a total number of exercisecards in the db
  

//We need to save exercise in the db => JSON

//On startup we can read from db and store all of the exercises in some data structure.

//Then we filter through that data structure with the given search query
//We render only the ExerciseCard(s) whose name is satisfied by the query.
//The props we pass into the ExerciseCard component will also be stored in the data structure,
  //so we don't have to do more disk reads.
  //Do we load ALL of the Exercise information at once, or only what we need?
  //We can probably get away eagerly loading all of the small data,
  //and lazily loading the large data like the ExerciseAccelerometerData
  //fuckit just load it all and optimize later


// Every second we can compute the new date time. then send that in to the ExerciseCard as another prop.
//Then from inside the exercise card, we compute the elapsed time and draw this.

function HomePage() {

  const modalRef = useRef();
  function openExcerciseEditModal(exercise) {
    setExerciseEditModalProps(exercise);
    modalRef.current.open();
  }  



  const [results, setResults] = useState([...Object.keys(exercises)]); //was let before
  
  const handleChange = (ev) => {
    let query = "";
    if (ev) {
      const target = ev.target;
      if (target) {
        query = target.value.toLowerCase();
      }
    }

    setResults(Object.keys(exercises).filter(exer => exer.toLowerCase().indexOf(query) > -1));
  }

  const [currentTime, setCurrentTime] = useState(Date());
  const [exerciseEditModalProps, setExerciseEditModalProps] = useState({});

  //setInterval(() => {setCurrentTime(Date())}, 1000);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    
    handleChange();
  }, [exercises]);

  return (
    <>

    


    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Home</p></IonTitle>

        </IonToolbar>
      </IonHeader>

    
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >

        {/*
        <IonSearchbar onIonChange={(ev) => handleChange(ev)} animated={true} showClearButton="always" clearIcon={trashBin} color="tertiary" placeholder="Enter Task"></IonSearchbar>
        */}

        <br></br>
        <br></br>

        <h3 style={{}}>Hey Sule</h3>
        <h2>Good Morning</h2>

        <h1>Find Your Purpose Today!</h1>

        {results.map(result => (
          <ExerciseCard key={result} {...exercises[result]} currentTime={currentTime} onClick={openExcerciseEditModal} />
        ))}


        <ExerciseEditModal {...exerciseEditModalProps} currentTime={currentTime}  ref={modalRef}/>
      
      </IonContent>
    </IonPage>
    </>
  );
};

export default HomePage;