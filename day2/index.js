"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
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
function part1(elfOverview) {
    elfOverview.forEach(function (value) {
        var split = value.split(" ");
        points = points + selectedThrow(split[1]);
    });
    console.log(points);
}
;
function part2(elfOverview) {
    elfOverview.forEach(function (value) {
        var split = value.split(" ");
        points = points + getResult(split[0], split[1]);
    });
    console.log(points);
}
;
function selectedThrow(selected) {
    var selectedPoints = 0;
    if (selected == "X") {
        selectedPoints = 1;
    }
    if (selected == "Y") {
        selectedPoints = 2;
    }
    if (selected == "Z") {
        selectedPoints = 3;
    }
    return selectedPoints;
}
function syncReadFile(filename) {
    var result = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), 'utf-8');
    return result;
}
function getResult(opp, you) {
    var outcome = getOutcome(you);
    var res = 0;
    if (outcome == 6) {
        if (opp == "A") {
            res = 2;
        }
        if (opp == "B") {
            res = 3;
        }
        if (opp == "C") {
            res = 1;
        }
    }
    if (outcome == 3) {
        if (opp == "A") {
            res = 1;
        }
        if (opp == "B") {
            res = 2;
        }
        if (opp == "C") {
            res = 3;
        }
    }
    if (outcome == 0) {
        if (opp == "A") {
            res = 3;
        }
        if (opp == "B") {
            res = 1;
        }
        if (opp == "C") {
            res = 2;
        }
    }
    console.log(outcome + res);
    return outcome + res;
}
function getOutcome(you) {
    var outcome = 0;
    if (you == "X") {
        outcome = 0;
    }
    if (you == "Y") {
        outcome = 3;
    }
    if (you == "Z") {
        outcome = 6;
    }
    return outcome;
}
function getOppWinner(opp, you) {
    if (opp == "A" && you == "Z") {
        return true;
    }
    if (opp == "B" && you == "X") {
        return true;
    }
    if (opp == "C" && you == "Y") {
        return true;
    }
}
function getDrawWinner(opp, you) {
    if (opp == "A" && you == "Z") {
        return true;
    }
    if (opp == "B" && you == "X") {
        return true;
    }
    if (opp == "C" && you == "Y") {
        return true;
    }
}
