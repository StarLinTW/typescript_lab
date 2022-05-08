const profile = {
  name:'alex',
  age:20,
  coords:{
    lat:0,
    lng:15
  },
  setAge(age:number):void{
    this.age = age;
  }
};

const {age} :{age:number} = profile
const {coords:{lat,lng}} : {coords:{lat: number,lng: number}} = profile


const testArray = [1,2,'3'];
const [element1, ,element3]:(number|string)[] = testArray;
console.log(typeof element3)