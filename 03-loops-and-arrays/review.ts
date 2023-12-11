// declare an array
let reviews : number[] = [5,7.6,8,9.0,2];

let totalSum : number = 0;

for(let i =0 ; i < reviews.length; i++){
    totalSum += reviews[i];
    console.log(reviews[i]);
}

let average : number = totalSum/reviews.length;
console.log("average :- " + average);