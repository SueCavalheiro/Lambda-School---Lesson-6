// getThird takes in an array 
// it returns the third item in the array
// if there is no third item, return null
// Example: getThird(['Doc', 'Biff', 'Marty']) returns 'Marty'

function getThird(array) {
  return array[2];
}

// test getThird
const casa = ['quarto', 'sala', 'cozinha', 'banheiro']

getThird(casa);

// stringLengths takes in four strings
// it returns an array containing the length of each string
// Example: stringLengths('mushroom', 'onion', '', 'garlic') returns [8, 5, 0, 6] 

function stringLengths(str1, str2, str3, str4) {
  const entrance = [str1, str2, str3, str4];
  const array = [];
  for (let element of entrance) {
    array.push(element.length);
  }
  return array;
}

// test stringLengths
stringLengths('tenis', 'mel', 'urso', 'Finland');

// removeFirst takes in an array
// it returns the same array, but with the first item removed
// Example: removeFirst(['frog', 'toad', 'cricket', 'skunk']) would
//          return ['toad', 'cricket', 'skunk'] 

function removeFirst(array) {
  array.splice(0, 1);
  return array;
}

//test removeFirst
const animals = ['frog', 'toad', 'cricket', 'skunk']
removeFirst(animals);

// swap takes in an array and two indices 
// it returns the array with the items at i and j swapped
// Example: swap(['unicycle', 'scooter', 'skateboard', 'canoe'], 0, 2) would
//          return ['skateboard', 'scooter', 'unicycle', 'canoe'];

function swap(array, i, j) {
  if (array[i] === undefined || array[j] === undefined) {
    return "Error! The index chosen does not exist in that array!"
  } 
  const one = array[i];
  const two = array[j];
  array.splice(i, 1, two);
  array.splice(j, 1, one);
  return array;
}

// test swap
const vehicles = ['unicycle', 'scooter', 'skateboard', 'canoe'];
swap(vehicles, 0, 2);

// getValue takes in an object and a key name
// if the key exists in the object, return the value of that key
// if not, return null
// Example: getValue({ first: 'Gordon', last: 'Peppermill'}, 'last') 
//          would return 'Peppermill'

function getValue(object, key) {
  if (key in object) {
    return object[key];
  } else return null;
}

//test getValue
const obj = {first: 'Gordon', last: 'Peppermill'};

getValue(obj, 'first');


// generateCSS takes in three strings containing CSS values
// it returns an object with the CSS key value pairs
// Example: generateCSS('100px', '70px', 'blue') would return
//          { height: '100px', width: '70px', color: 'blue' }

function generateCSS(height, width, color) {
  codeCSS = {'height': height, 'width': width, 'color': color}
  return codeCSS
}

//test generateCSS
generateCSS('350px', '350px', 'green');


// getValues takes in an objects
// it return an array containing the values from that object
// Example: getValues({ name: 'Ally', age: 27, job: 'hypnotist' })
//          would return ['Ally', 27, 'hypnotist']

function getValues(obj) {
  const array = []
  for (let key of Object.keys(obj)) {
    array.push(obj[key]);
  }
  return array;
}

// test getValues
const person = {firstName : "John", lastName : "Doe", age : 50, eyeColor : "blue"};

getValues(person);

// STRETCH PROBLEMS (NOT REQUIRED)

// wrapAround takes in an array
// and returns an array with the last item in the first spot
// and everything else shifted one index over
// Example: wrapAround(['teaspoon', 'meat grinder', 'spatula', 'salad fork'])
//          would return ['salad fork', 'teaspoon', 'meat grinder', 'spatula']

function wrapAround(array) {
  array.splice(0, 0, array[array.length - 1]);
  array.pop();
  return array
}

// test wrapAround
const tableware = ['teaspoon', 'meat grinder', 'spatula', 'salad fork'];

wrapAround(tableware);

// count takes in an array
// and returns an objects containing a frequency count for each item in the array
// Example: count(['red', 'blue', 'blue', 'pink', 'blue', 'green', 'red']) would
//          return { red: 2, blue: 3, pink: 1, green: 1}

function count(array) {
  const obj = {};
  
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
  }
  
  return obj;
}


// test count
const colors = ['red', 'blue', 'blue', 'pink', 'blue', 'green', 'red'];

count(colors);
