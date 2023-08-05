function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    else if (arr[i > max]) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.reduce === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.lenght === 0) {
    return 0;
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length ===0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    }
    else {
      sumOddElement += arr[i]
    }
  }
  return subEvenOdd = sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) { 
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement ++;
      countEvenElement += arr[i];
    }
  }
  if (countEvenElement ===0) {
    return 0;
  }
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let currentResult = func(...arrOfArr[i]);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
 }        
  return maxWorkerResult;
}