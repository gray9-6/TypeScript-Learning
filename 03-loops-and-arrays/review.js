// declare an array
var reviews = [5, 7.6, 8, 9.0, 2];
var totalSum = 0;
for (var i = 0; i < reviews.length; i++) {
    totalSum += reviews[i];
    console.log(reviews[i]);
}
var average = totalSum / reviews.length;
console.log("average :- " + average);
