//心得：function arguments and return annotion 都要定義
const add = (a: number, b: number): number => {
  return a + b;
}


const multiply = function(a: number, b: number): number{
  return a * b;
}

function divide(a: number, b: number): number{
  return a/b;
}


const logger = (message: string):void =>{
  console.log(message);
  throw new Error(message);
}

//never 這個function 不會被執行完(執行到endpoint)https://www.tutorialsteacher.com/typescript/typescript-never
const throwError = (message: string):never =>{
  // console.log();
  // throw new Error(message);
  if(!message){
    throw new Error(message);
  } else{
    console.log();
  }
  //以下兩種
  throw new Error(message);
  while(true){}
};


const todaysWeather = {
  date: new Date(),
  weather:'sunny',
  user:'aaa'
};

const logWeather = (todaysWeather:{date:Date,weather:string}):void =>{
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
  // console.log(todaysWeather.user); // 呼叫不到

}

//解構
const logWeather_esc2015 = ({date, weather}:{date:Date,weather:string}):void=>{
  console.log(date);
  console.log(weather);
}

logWeather_esc2015(todaysWeather);
