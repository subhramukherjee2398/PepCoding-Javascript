function car (brand,model,color) {
    this.Brand = brand,
    this.Model = model,
    this.Color = color

    this.drive = function(){
        console.log("Driving " + this.Brand)
    }
}

let car1 = new car("BMW","X0","White")
console.log(car1)

car1.Brand = "ALto"
console.log(car1)

car1.drive()