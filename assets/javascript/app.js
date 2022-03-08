function getAverage (a,b){

    var average = (a + b) / 2; //Local variable
    console.log(average);
    return average;

}
var myresult = getAverage(7,8); //Global variable

function logResult(){
    
    console.log("the average is " + myresult);
    
}

logResult();