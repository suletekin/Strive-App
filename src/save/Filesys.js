import { Filesystem, Directory } from '@capacitor/filesystem';
import { Encoding } from '@capacitor/filesystem';
import StriveBannerBkg from '../images/strive-banner-bkg.png';

function temp_build_exercise() {
    let result =  {
        id: -1
        ,name: 'None'
        ,img: StriveBannerBkg
        ,completed: 0
        
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

    // JOURNALING (1 daily)
    let test_exer = temp_build_exercise();
    test_exer['name'] = 'Journaling';
    test_exer['lastPerformed'] = new Date('2023-04-05T04:15:09.878Z');
    test_exer['cooldown'] = 60*24*5; //cd in minutes
    test_exer['scheduled'] = false;
    test_exer['description'] = 'Spend a few minutes writing down your thoughts, feelings, and experiences in a journal. Reflect on your day, set goals, express gratitude, or simply unload your mind. Benefits: Enhances self-awareness, promotes emotional expression, and aids in stress relief.';
    exercises[test_exer['id']] = test_exer;

    // WORKOUT (1 daily - 30min)
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Workout';
    test_exer['lastPerformed'] = new Date('2023-04-06T01:23:47.878Z');
    test_exer['cooldown'] = 60*24*12; //cd in minutes
    test_exer['duration'] = 30 // in minutes
    test_exer['description'] = 'Engage in physical activity for 30 minutes, such as walking, jogging, or doing a workout routine. Benefits: Boosts mood, increases energy, improves physical health, and reduces stress and anxiety.';
    exercises[test_exer['id']] = test_exer;
    write_json('exercises.json', exercises);

    // READING (10 minutes)
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Reading';
    test_exer['lastPerformed'] = new Date('2023-04-06T01:23:47.878Z');
    test_exer['cooldown'] = 60*24*12; //cd in minutes
    test_exer['duration'] = 10 // in minutes
    test_exer['description'] = 'Take a break from screens and spend 10 minutes reading a book, article, or any other form of written material. Benefits: Enhances cognitive skills, expands knowledge, promotes relaxation, and reduces stress.';
    exercises[test_exer['id']] = test_exer;
    write_json('exercises.json', exercises);

    // WATER (2 liters)
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Water';
    test_exer['lastPerformed'] = new Date('2023-04-06T01:23:47.878Z');
    test_exer['cooldown'] = 60*24*12; //cd in minutes
    test_exer['description'] = 'Hydrate your body by drinking 2 liters of water throughout the day. Benefits: Improves physical health, supports cognitive function, aids digestion, and promotes overall well-being.';
    exercises[test_exer['id']] = test_exer;
    write_json('exercises.json', exercises);

    // SILENCE (3 minutes)
    test_exer = temp_build_exercise();
    test_exer['name'] = 'Silence';
    test_exer['lastPerformed'] = new Date('2023-04-06T08:42:05.878Z');
    test_exer['cooldown'] = 60*24*10; //cd in minutes
    test_exer['duration'] = 3 // in minutes
    test_exer['description'] = 'Find a quiet space, close your eyes, and sit in silence for 3 minutes, focusing on your breath or simply being present in the moment. Benefits: Reduces stress, enhances mindfulness, promotes relaxation, and improves mental clarity.';
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