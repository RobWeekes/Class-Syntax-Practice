class Computer {
    constructor(brand, OS, type) {
        this.brand = brand;
        this.OS = OS;
        this.type = type;
    }

    // INSTANCE methods
    powerOn() {
        return `${this.brand} ${this.type} powers on with ${this.OS}.`;
    }

    // STATIC CLASS methods
    static bootUpPCs(computerArray) {
        let result = [];
        computerArray.forEach(PC => {
            result.push(PC.powerOn());
        });
        return result;
    }
}

let macbook = new Computer('Apple', 'OSX', 'laptop');
// console.log(macbook);
// console.log(macbook.powerOn());

let dell = new Computer('Dell', 'Windows 11 Pro', 'desktop')
// console.log(dell);
// console.log(dell.powerOn());

let pcArr = [macbook, dell];
// console.log(pcArr);

console.log(Computer.bootUpPCs(pcArr));
