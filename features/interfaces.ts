interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic ={
  name: 'civic',
  year:new Date(),
  broken: true,
  summary(): string{
    return `Name: ${this.name}`;
  }
};

const drink={
  Color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `My drink has ${this.sugar} sugar.`;
  }
};


//缺點宣告太長
// const printVehicle = (vehicle: {name: string, year: number, broken: boolean}) =>{
const printSummary = (item: Reportable) =>{
  // console.log(`Name: ${item.name}`);
  // console.log(`year: ${item.year}`);
  // console.log(`Broken? ${item.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);