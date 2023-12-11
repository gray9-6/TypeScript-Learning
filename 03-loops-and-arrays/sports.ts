let sportsOne : string[] = ["basketball","cricket","baseBall"];

// for loop
for(let i = 0; i <sportsOne.length; i++){
    console.log(sportsOne[i]);
}

// for each loop
console.log("printing using for each loop");
for(let sport of sportsOne){
    console.log(sport);
}

// using conditionals 

console.log("using conditionals");
for(let tempSport of sportsOne){
    if(tempSport == "cricket"){
        console.log(tempSport + " is My favorite sport");
    }else{
        console.log(tempSport);
    }
}