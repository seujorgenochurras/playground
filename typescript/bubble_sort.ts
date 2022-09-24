let array = [1, 3, 4, 2, 2, 1, 2, 3, 4, 6, 2, 7, 8];

function sortYourArr(array: number[]) {
  let finalArr: number[];
  console.time();
  array.forEach(() => {
    array.map((value, index, array) => {
      let nextValue = array[index + 1];

      if (value > nextValue) {
        array[index] = nextValue;
        array[index + 1] = value;
      }
      finalArr = array;
    })
  })
  console.timeEnd()
  return finalArr;
}

console.log(sortYourArr(array))