import { readFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

export {};

var inputFile = syncReadFile('./input.txt').split(/\r?\n/);
var points = 0;
//part1(inputFile);
part2(inputFile);
//
//
// rock = 1
// paper = 2
// scissor = 3
//
//


function part1(elfOverview:string[]){
  elfOverview.forEach(function (value) {
    var split = value.split(" ") ;
    
    
    points = points + selectedThrow(split[1])
    
  });
  console.log(points)
};

function part2(elfOverview:string[]){
  elfOverview.forEach(function (value) {
    var split = value.split(" ") ;
    points = points + getResult(split[0], split[1])
    
  });
  console.log(points)
};

function selectedThrow(selected:string){
    var selectedPoints = 0
    if(selected == "X"){selectedPoints = 1}
    if(selected == "Y"){selectedPoints = 2}
    if(selected == "Z"){selectedPoints = 3}

    return selectedPoints
}

function syncReadFile(filename: string) {
  const result = readFileSync(join(__dirname, filename), 'utf-8');
  return result;
}

function getResult(opp:string, you:string){
    var outcome = getOutcome(you)
    var res = 0    
    if(outcome == 6){

    if(opp == "A"){res = 2}
    if(opp == "B"){res = 3}
    if(opp == "C"){res = 1}
    }
    
    if(outcome == 3){
        
    if(opp == "A"){res = 1}
    if(opp == "B"){res = 2}
    if(opp == "C"){res = 3}
    }
    
    if(outcome == 0){
        
    if(opp == "A"){res = 3}
    if(opp == "B"){res = 1}
    if(opp == "C"){res = 2}
    }
    

    console.log(outcome+res)
    return outcome+res
}


function getOutcome(you:string){
    var outcome:number = 0
    if (you == "X"){outcome = 0}
    if (you == "Y"){outcome = 3}
    if (you == "Z"){outcome = 6}

    return outcome
}

function getOppWinner(opp:string, you:string){
    if(opp == "A" && you == "Z"){return true}
    if(opp == "B" && you == "X"){return true}
    if(opp == "C" && you == "Y"){return true}
}

function getDrawWinner(opp:string, you:string){
    if(opp == "A" && you == "Z"){return true}
    if(opp == "B" && you == "X"){return true}
    if(opp == "C" && you == "Y"){return true}
}