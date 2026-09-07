const numbers = [1,2,3,4];
function includes (array, number) {
    for(let element of array)
     if(element === number)   
        return true;
        return false;
}
  for(let i of numbers){
    console.log(i)
  }