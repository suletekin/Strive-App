import { Filesystem, Directory } from '@capacitor/filesystem';
import { Encoding } from '@capacitor/filesystem';
import StriveBannerBkg from '../images/strive-banner-bkg.png';

function temp_build_exercise() {
    let result =  {
        id: -1
        ,name: 'None'
        ,img: StriveBannerBkg
        
        ,lifetimeGains: 0

        ,lastPerformed: null
        ,scheduled: true
        ,cooldown: 0

        ,accelerometer: null
    };
    temp_exercise_add(result);
    return result
}

function temp_exercise_add (exercise) {
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
    exercises[id] = exercise //JSON.parse(JSON.stringify(this));

    //console.log(id);

    //console.log(collection);
    write_json('exercises.json', exercises);
}

let exercises = {};


let DEBUG_RESET = true;
if (DEBUG_RESET) {

    // JOURNALING
    let test_exer = temp_build_exercise();
    test_exer['name'] = 'Journaling';
    test_exer['lastPerformed'] = new Date('2023-04-05T04:15:09.878Z');
    test_exer['cooldown'] = 60*24*5; //cd in minutes
    test_exer['scheduled'] = false;
    exercises[test_exer['id']] = test_exer;

    // WORKOUT
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Workout';
    test_exer['lastPerformed'] = new Date('2023-04-06T01:23:47.878Z');
    test_exer['cooldown'] = 60*24*12; //cd in minutes
    exercises[test_exer['id']] = test_exer;
    write_json('exercises.json', exercises);

    // READING
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Reading';
    test_exer['lastPerformed'] = new Date('2023-04-06T01:23:47.878Z');
    test_exer['cooldown'] = 60*24*12; //cd in minutes
    exercises[test_exer['id']] = test_exer;
    write_json('exercises.json', exercises);

    // WATER
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Water';
    test_exer['lastPerformed'] = new Date('2023-04-06T01:23:47.878Z');
    test_exer['cooldown'] = 60*24*12; //cd in minutes
    exercises[test_exer['id']] = test_exer;
    write_json('exercises.json', exercises);

    // SILENCE
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Silence';
    test_exer['lastPerformed'] = new Date('2023-04-06T08:42:05.878Z');
    test_exer['cooldown'] = 60*24*10; //cd in minutes
    exercises[test_exer['id']] = test_exer;

} else {
    setTimeout (async() => {
        exercises = await read_json('exercises.json');
    }, 0); 
}


async function read_json(path) {
    const data = await Filesystem.readFile({
        path: path,
        directory: Directory.External,
        encoding: Encoding.UTF8,
    });
    let result = JSON.parse(data['data']);
    return result;
}

async function write_json(path, data) {
    Filesystem.writeFile({
        data: JSON.stringify(data),
        directory: Directory.External,
        path: path,
        encoding: Encoding.UTF8,
    });
}

export { read_json, write_json, exercises};