var chocolateBars = new Array();
chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var NewArray = [];
  NewArray = [element, ...array];

  return NewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
 array;
 array = [element, ...array];
 return array;
}

function addElementToEndOfArray(array, element){
  var n = array;
  n.push(element);
  return n;
}

function destructivelyAddElementToEndOfArray(array, element){
  array = [...array, element];
  return array;
}

