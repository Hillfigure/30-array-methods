// A

const addTheWordCool = function(array){
    array.push('cool');
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// B

const amountOfElementsInArray = function(array){
    return array.length;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

// C

const selectBelgiumFromBenelux = function(array){
    return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

// D

const lastElementInArray = function(array){
    // Slice is possible, but returns array, not string.
    // Advantage of Slice: its almost 2 times as fast as length method.
    return array.slice(-1);
    // return array[array.length-1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 

// E

// Slice does not affect the original array values
// Splice does. Only the selected value remains.

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
    return array.slice(1)
}
const impeachTrumpSplice = function(array) {
    return array.splice(1);
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents);
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents);

// F

const stringsTogether = function(array){
    return array.join(" ");
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 

// G

const combineArrays = function(firstArray, secondArray){
    return firstArray.concat(secondArray)
}

console.log(combineArrays([1,2,3], [4,5,6]));