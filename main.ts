import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayFindMultiples(myArray: number[]) : Array<Number> {
      let multiplesArr =[], i=0; 
      for (let index = 0; index < myArray.length; index++) {
          if(myArray[index] % 5 === 0 || myArray[index]%10 === 0 )
          {
          multiplesArr[i] = myArray[index];
          i++;
          }
      }

return multiplesArr;
    }

    public arraySeparate(myArray: any) : Array<string>{
         let stringArr =[], i =0; 
         for (let index = 0; index < myArray.length; index++) {
          if( typeof(myArray[index])  === "string" ){
              stringArr[i] = myArray[index];
          }
      }
      return stringArr;
    }

    public arraySplit(str:string) : Array<number>{
        let primeArr =[], j =0;
         let strArr= str.split(" ");

         for (let index = 0; index < strArr.length; index++) {
             if( typeof(strArr[index])  === "number" ){
                    let num = Number(strArr[index]);
                 let counter:boolean = true;
                 for (let i = 2; i < num; i++) {
                     if(num%i === 0){
                         counter = false;
                     }
                 }
                 if(counter){
                     primeArr[j] = num;
                     j++;
                 }
             }
             
         }
return primeArr;

    }

    public arraySort(myArray:any):Array<string>{
      return myArray.sort();

    }

    public arrayReplace(myArray:any):Array<number>{ 
      for (let index = 0; index < myArray.length; index++) {
          if(myArray[index] % 3 === 0 )
          {
           myArray[index] = 5;
          }
          }
          return myArray;
}
}
let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit("p1376654"));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));



