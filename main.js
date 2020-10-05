"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayFindMultiples = function (myArray) {
        var multiplesArr = [], i = 0;
        for (var index = 0; index < myArray.length; index++) {
            if (myArray[index] % 5 === 0 || myArray[index] % 10 === 0) {
                multiplesArr[i] = myArray[index];
                i++;
            }
        }
        return multiplesArr;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var stringArr = [], i = 0;
        for (var index = 0; index < myArray.length; index++) {
            if (typeof (myArray[index]) === "string") {
                stringArr[i] = myArray[index];
            }
        }
        return stringArr;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var primeArr = [], j = 0;
        var strArr = str.split(" ");
        for (var index = 0; index < strArr.length; index++) {
            if (typeof (strArr[index]) === "number") {
                var num = Number(strArr[index]);
                var counter = true;
                for (var i = 2; i < num; i++) {
                    if (num % i === 0) {
                        counter = false;
                    }
                }
                if (counter) {
                    primeArr[j] = num;
                    j++;
                }
            }
        }
        return primeArr;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        return myArray.sort();
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var index = 0; index < myArray.length; index++) {
            if (myArray[index] % 3 === 0) {
                myArray[index] = 5;
            }
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit("p1376654"));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
