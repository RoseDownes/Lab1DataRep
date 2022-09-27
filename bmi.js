class BMI {
    //constructer used to initialise data in class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2); //calculates BMI
        return bmi;
    }
}
let myBMI = new BMI(2, 100);
console.log(myBMI.calculateBMI()); //testing