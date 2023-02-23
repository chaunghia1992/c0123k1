
/*sum = 0;
for (var i = 20; i <= 37; i++)
sum += i;
console.log("Sum from 20 to 37 is " + sum);

sum = 0;
for (var i = 4; i <= 10; i++)
sum += i;
console.log("Sum from 50 to 100 is " + sum);*/

let sum = 0;
let sum1 = sumFromTo(1,3);
function sumFromTo(from, to){
    let sum = 0;
    for(let i=from;i<=to;i++){
        sum += i;
    }
    return sum;
}
console.log(sum);