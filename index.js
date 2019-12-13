function breakOut(array, changeValue, stopValue) { // Every value changes to changeValue until stopValue is encountered
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) { // Checks if element is the stop value. If not, changes to changeValue.
      array[i] = changeValue;
    }
    else {
      break // Breaks when encounters changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) { // Changes every value to changeValue except for skipValue
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    else {
      array[i] = changeValue;
    }
  }
  return array
}
