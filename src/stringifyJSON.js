// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//turn entire objects into string
//with the exception of two cases function and undefined
// use recursion to access unknown number of nested objects

var stringifyJSON = function(obj) {
  // your code goes here
  // break case: numbers, strings, null, boolean
  //if input is a number
  if (typeof obj === 'number') {
    //return number as a string
    return obj + '';
  //if input is a string
  } else if (typeof obj === 'string') {
    //return string encased in ''
    return '"' + obj + '"';
    //if input is null
  } else if (obj === null) {
    //return null as a string
    return null + '';
  // if input is boolean
  } else if (typeof obj === 'boolean') {
    //return boolean as a string
    return obj + '';
  }
  // check for nested arrays
  if (Array.isArray(obj)) {
    let arrayResult = '[';
    if (obj.length === 0) {
      return '[]';
    }
    //iterate through array
    for (let index = 0; index < obj.length; index++) {
      //return result of calling stringifyJSON on array elements incased in stringified brackets
      if (index > 0) {
        arrayResult = arrayResult.concat(',');
      }
      arrayResult = arrayResult.concat(stringifyJSON(obj[index]));

    }
    //return result surrounded by brackets
    return arrayResult + ']';
  }
  // check for nested objects
  if (typeof obj === 'object') {
    //iterate through object
    let objectResult = '{';
    for (let key in obj) {
      //check if key or value is undefined or function
      if (typeof key === 'function' || typeof obj[key] === 'function'
      || key === undefined || obj[key] === undefined) {
        //return return empty curly bracket
        return '{}';
      }
      if (objectResult.length !== 1) {
        objectResult = objectResult.concat(',');
      }
      //return result of calling stringifyJSON on array elements incased in stringified curly bracket
      objectResult = objectResult.concat('"' + key + '":' + stringifyJSON(obj[key]));
    }
    //return result surrounded by curly braces
    return objectResult + '}';
  }
};
