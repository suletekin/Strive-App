import { write_json, exercises } from './Filesys'; 
require('datejs');


function exercise_add (exercise) {
    let id = 0;            
    for (let [key,] of Object.entries(exercises)) {
        let curr_id = parseInt(key);
        if (curr_id > id) {
            id = curr_id;
        }
    }

    id ++;
    exercise['id'] = id;

    // Add to exercises
    exercises[id] = exercise 

    write_json('exercises.json', exercises);
}


function Exercise() {
    let result =  {
        id: -1
        ,name: 'None'
        ,img: 'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        
        ,lifetimeGains: 0

        ,lastPerformed: null
        ,scheduled: true
        ,cooldown: 0

        ,accelerometer: null
    };
    exercise_add(result);
    return result
}

// Returns the time remaining to complete the exercise in seconds
const getExerciseTimeRemaining = (exercise) => {
    if (!exercise['scheduled']) {
        return '';
    }
    let expiry = (new Date(exercise['lastPerformed'])).addMinutes(exercise['cooldown']);
    let timeRemaining = (new Date(expiry)) - (new Date(exercise['currentTime']));
    timeRemaining = Math.round(timeRemaining/1000); // time remaining in seconds
    return timeRemaining;
};


// Returns the time remaining to complete the exercise as a percentage
const getExerciseTimeRemainingPercent = (exercise, timeRemaining) => {
    if (!exercise['scheduled']) {
        return '';
    }
    timeRemaining = timeRemaining || getExerciseTimeRemaining(exercise);
    return (timeRemaining/60) / exercise['cooldown'];
};



const getExerciseStopwatchSuffix = (exercise, timeRemaining) => {
    let timeRemainingPercent = getExerciseTimeRemainingPercent(exercise, timeRemaining);

    if (!exercise['scheduled']) {
        return '';
    }

    let stopwatchSuffix = '1';
    if (timeRemainingPercent <= 0.1) {
        stopwatchSuffix = '3';
    } else if (timeRemainingPercent <= 0.3) {
        stopwatchSuffix = '2';
    }
    return stopwatchSuffix;
};

const secondsFormat = (seconds) => {
    if (seconds === '') {
        return 'N/A';
    }
    //var days = Math.floor(seconds / (3600*24));
    //seconds  -= days*3600*24;
    var hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    var mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;

    if (hrs !== 0 && mnts < 10) {
        mnts = "0" + mnts;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (hrs === 0)
        return mnts+":"+seconds;
    return hrs+": "+mnts+":"+seconds;
};

export { Exercise, getExerciseTimeRemaining, getExerciseStopwatchSuffix, getExerciseTimeRemainingPercent, secondsFormat};