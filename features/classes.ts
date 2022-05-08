class Vehicle{
  // color: string;
  constructor(public color: string){ //上下兩行註解與多家public的參數一樣，也可以嘗試private 與 proteced
    // this.color = color;
  }

  drive(): void{
    console.log('啦啦啦');
  }

 protected honk():void{
    console.log('嘿嘿嘿');
  }
}

class Car extends Vehicle{
  constructor(public wheels:number, color:string){//注意不用color public 
    super(color);
  }
  drive():void{   //不可以overwrite modifier 
    console.log('hehehehe');
  }

  startDrivingProcess():void{
    this.honk();
  }
}

const car = new Car(4,'blue');
car.drive();
console.log(car.color);
