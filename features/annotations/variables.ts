let apples: number = 5; //type annotation
apples = 10;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothig: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red','green','yellow'];

let numbers: number[] = [0, 1, 2, 3];
let truths: boolean[] = [true, false,];


class Car {

}
let car: Car = new Car();


//Object
let point:{x: number, y: number} = {
  x:10,
  y:20
};

//function 
const logNumber: (i:number) => void = (i: number):void=>{
  console.log(i);
}

//When to use annotations
// 1. Function that returns the 'any' type

const json = '{"x":10, "y":20}';
const coordinates:{x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2. When we declare avariable on one line
//    and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWords = false;

for(let i = 0; i < words.length; i++){
  if (words[i] === 'green'){
    foundWords = true;
  }
}

// 3. Variable whose type cannot be inferred correctly
let numbers2 = [1, 2, -3];
let numberAboveZero: boolean | number = false;
for(let i = 0; i < numbers2.length; i++){
  if (numbers2[i] > 0){
    numberAboveZero = numbers2[i];
  }
}





