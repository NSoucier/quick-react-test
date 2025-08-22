// classes exercise

class Car {
    constructor(make, model, year, _mileage = 0, steeringWheelType) {
        this.make = make; 
        this.model = model; 
        this.year = year;
        this._mileage = _mileage;
        this.steeringWheel = new SteeringWheel(steeringWheelType)
    }

    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`
    }

    drive(miles) {
        this.mileage += miles
        return this.mileage
    }

    get_mileage() {
        return this._mileage
    }

    set_mileage(miles) {

    }
}

class SteeringWheel {
    constructor(type) {
        this.type = type;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, mileage = 0, battery_range) {
        super(make, model, year, mileage);
        this.battery_range = battery_range;
    }

    displayInfo() {
        return `${this.year} ${this.make} ${this.model} with a range of ${this.battery_range} miles.`
    }
}

const myCar = new Car('Honda', 'CRV', 2025)