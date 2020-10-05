// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// I was here -lillian

var getElementsByClassName = function(className) {
  // your code here
  //Call checkClass with document.body as input
  checkClass(document.body, className, result = []);
  return result;
};
//Helper Function to check if the inputted element has a specific class
var checkClass = function(element, className, result) {
  //Check if element contains given class name & it has a class
  if (element.classList && element.classList.contains(className)) {
    //If true, push into result array
    result.push(element);
  //Check for and iterate through children elements
  } if (element.hasChildNodes()) {
    for (let index = 0; index < element.childNodes.length; index++) {
      //Call upon helper function checkClass with children elements as input
      checkClass(element.childNodes[index], className, result);
    }
  }
};
