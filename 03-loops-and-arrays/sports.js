var sportsOne = ["basketball", "cricket", "baseBall"];
// for loop
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// for each loop
console.log("printing using for each loop");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    console.log(sport);
}
// using conditionals 
console.log("using conditionals");
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    if (tempSport == "cricket") {
        console.log(tempSport + " is My favorite sport");
    }
    else {
        console.log(tempSport);
    }
}
