const currentYear = new Date().getFullYear();
class Car {
   constructor (name, model, year, color, maxSpeed, fuelConsumption, fuelCapacity) {
   this.name = name;
   this.model = model;
   this.year = year;
   this.color = color;
   this.maxSpeed = maxSpeed;
   this.fuelCapacity = fuelCapacity;
   this.fuelConsumption = fuelConsumption;
   }

    get getFullName() {
         return `this.name, this.model`;
    }

    get getAge() {
        let ageOfCar = currentYear - this.year;
        return `${ageOfCar} years `;
    }

    changeColor(color) {
                if (color.toUpperCase() === this.color.toUpperCase()){
                    return 'your car already has the same color';
                }
    
                else if (this.color = color.toUpperCase()){
                return `Color has been changed to ${this.color}`;
            }
    }
    calculateWay(kilometers, fuel) {
        let oneKmLitter = fuel/(this.fuelConsumption/100);
        let neededFuel = kilometers/this.fuelConsumption;
        if (fuel<10){
            return console.log ('You need to refuel');
        };
        if (kilometers <= oneKmLitter) {

            console.log (`You need ${kilometers/this.maxSpeed} hours to reach the destination`);
        };
        if (oneKmLitter <= kilometers) {
            let i = 0;
			while (neededFuel > fuel){
				i++;
                fuel += this.fuelCapacity;
            }
            console.log (`You need to refuel ${i} times`);
        }
    }
}
    

class BMW extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, climateControl) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.climateControl = climateControl;
    }
    get getclimateControl() {
        console.log (this.climateControl);
      }


}

const BMWS = new BMW ('BMW', 'series', 2010, 'Yellow', 150, 10, 40, 'Has climatecontrol');
BMWS.getclimateControl

class NISSAN extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, sunRoof) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.sunRoof = sunRoof;
    }
    get getSunRoof() {
        return `All Nissan cars have ${this.sunRoof} sunroofs in every car`
      }


}

const NISSANS = new NISSAN ('Nissan', 'Qashkai', 2013, 'Yellow', 134, 10, 40, 3);
console.log (NISSANS.getSunRoof);

class AUDI extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, power) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.power = power;
    }
    get getPower() {
        return `All Audi cars have at least ${this.power} liters of engine capacity`
      }


}

const audis = new AUDI ('AUDI', 'Q5', 2017, 'Black', 134, 10, 40, 3.2);
console.log (audis.getPower);
console.log (audis.getAge);
audis.calculateWay(305, 30);