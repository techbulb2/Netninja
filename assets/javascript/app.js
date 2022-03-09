// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";

// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = "Shawn";
// myCar.drive = function(){console.log("now driving");};


// myCar.drive();


var myCar2 = {
    maxSpeed: 50, 
    driver: "Net Ninja", 
    drive: function(speed, time){
        console.log(speed * time);
    },

    logDriver: function(){
        console.log("driver name is " + this.driver);
    }

};
// myCar2.logDriver();
// console.log(myCar2.maxSpeed);
// myCar2.drive(50, 3);

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };

    this.logDriver= function(){
        console.log("driver name is " + this.driver);
    }


}

var myCar = new Car(70, "ninja man");
var myCar2 = new Car(70, " man");
var myCar3 = new Car(70, "shawn man");
var myCar4 = new Car(70, "many man");

myCar.drive(30,5);
myCar2.drive(30,6);
myCar2.logDriver();
myCar3.logDriver();
myCar4.drive(30,7);

