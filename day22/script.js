class car{
    constructor(brand ,model, year ,color)
    {
        this.brand=brand;
        this.model=model;
        this.year=year;
        this.color=color;

    }

getCarInfo() {
    return `${this.brand} ${this.model} (${this.year}) - ${this.color}`;
}
getCarAge(currentYear) {
    
    return currentYear-this.year
}


}


const car1 = new car("Toyota", "Camry", 2015, "Black");
const car2 = new car("Honda", "Civic", 2018, "White");
const car3 = new car("Tesla", "Model S", 2020, "Red");


console.log(car1.getCarInfo());
console.log(car1.getCarAge(2024)); 

console.log(car2.getCarInfo()); 
console.log(car2.getCarAge(2024));

console.log(car3.getCarInfo()); 
console.log(car3.getCarAge(2024)); 


