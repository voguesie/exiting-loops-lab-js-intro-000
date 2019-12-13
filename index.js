function breakOut(array, changeValue, stopValue) { // Every value changes to changeValue until stopValue is encountered
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    }
    else {
      break
    }
  }
  return array
}
