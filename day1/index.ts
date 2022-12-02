import { readFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

export {};

type Elf = {
  calories: number;
}

type elfArray = {
  Elf: Elf
}
//Read File

var inputFile = syncReadFile('./input.txt').split(/\r?\n/);
let elfArray:Elf[] = [];
var currCalories:number = 0;


createElfOverview(inputFile);

console.log("Elf with most calories: " + mostCalories(elfArray).calories)

//try sorting the file
elfArray.sort((n1:Elf,n2:Elf) => {
  if (n1.calories > n2.calories){
    return -1;
  }
  if (n1.calories < n2.calories){
    return 1;
  }
  
  return 0
})

// Get top 3
console.log(elfArray[0].calories +  elfArray[1].calories + elfArray[2].calories);

function syncReadFile(filename: string) {
  const result = readFileSync(join(__dirname, filename), 'utf-8');
  return result;
}

function createElfOverview(elfOverview:string[]){
  elfOverview.forEach(function (value) {
    if(value.length > 1){
      currCalories += +value;
    } 
    else {
      var currElf: Elf = {
        calories: currCalories
      };       

      elfArray.push(currElf);
    
      currCalories = 0;
    }
  });
};




function mostCalories(checkElf:Elf[]){
  var currElf:Elf = {
    calories: 0 
  };  
  var prevElf:Elf = {
    calories: 0
  };
  var mostCalories:Elf = {
    calories:0
  };
  
  checkElf.forEach(function (value){
    currElf = value
    
    if(currElf.calories > mostCalories.calories){
      
      mostCalories = currElf
      console.log(mostCalories.calories)
    }

    prevElf = currElf
  });

  return mostCalories 
}