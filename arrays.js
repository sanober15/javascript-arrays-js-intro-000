var chocolateBars = new Array();
chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var NewArray = array
  NewArray.unshift(element)
  return NewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){

 array.unshift(element)
 return array;
}

function addElementToEndOfArray(array, element){
  var n = array
  n.push(element)
  return n;
}
/*
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  array;
  var i = index;
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array){
  var a = array.slice(1);
  return a;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var x = [];
  x = array;
  x.pop():
  return x;
}
*/
