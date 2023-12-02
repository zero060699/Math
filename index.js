// bubblesort
const bubbleSort = (a) => {
    let swaped;
    for(let i = 0; i < a.length; i++){
      swaped = false;
      for(let j = 0; j < a.length -i -1; j++){
        if(a[j] > a[j + 1]) {
          let tmp = a[j];
          a[j] = a[j +1];
          a[j +1] = tmp;
          swaped = true;
        }
      }
      if(!swaped){
        break;
      }
    }
    return a;
  }
  
  a = [10,3,1,2,8,9,7,4,6,5]
  bubbleSort(a);

//interchangeSort
const interchangeSort = (a) => {
    let swaped
    for(let i = 0; i < a.length -1; i++) {
      swaped = false;
      for(let j = i + 1; j < a.length; j++) {
        if(a[i] > a[j]) {
          let tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
          swaped = true;
        }
      }
      if(!swaped){
        break;
      }
    }
    return a
  }
  
  a = [10,3,1,2,8,9,7,4,6,5]
  interchangeSort(a)