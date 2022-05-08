const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMaker = [
  ['f150'],['f150'],['f150']
];

// Help with interence when extracting values
const myCar = carMakers[0];
const myCar2 = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

//Help with 'map' 不定義也會知道是String
carMakers.map((car: string): string=>{
  return  car;
});

//Flexible types
const importantDates: (Date | string | number)[] = [];
importantDates.push(new Date);
importantDates.push("new Date");
importantDates.push(123);



