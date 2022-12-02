"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
//Read File
var inputFile = syncReadFile('./input.txt').split(/\r?\n/);
var elfArray = [];
var currCalories = 0;
createElfOverview(inputFile);
console.log("Elf with most calories: " + mostCalories(elfArray).calories);
//try sorting the file
elfArray.sort(function (n1, n2) {
    if (n1.calories > n2.calories) {
        return -1;
    }
    if (n1.calories < n2.calories) {
        return 1;
    }
    return 0;
});
// Get top 3
console.log(elfArray[0].calories + elfArray[1].calories + elfArray[2].calories);
function syncReadFile(filename) {
    var result = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), 'utf-8');
    return result;
}
function createElfOverview(elfOverview) {
    elfOverview.forEach(function (value) {
        if (value.length > 1) {
            currCalories += +value;
        }
        else {
            var currElf = {
                calories: currCalories
            };
            elfArray.push(currElf);
            currCalories = 0;
        }
    });
}
;
function mostCalories(checkElf) {
    var currElf = {
        calories: 0
    };
    var prevElf = {
        calories: 0
    };
    var mostCalories = {
        calories: 0
    };
    checkElf.forEach(function (value) {
        currElf = value;
        if (currElf.calories > mostCalories.calories) {
            mostCalories = currElf;
            console.log(mostCalories.calories);
        }
        prevElf = currElf;
    });
    return mostCalories;
}
