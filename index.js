//Writing function (solution)

const numbers = [9,4,5,6,7,3,2,6,4,3,2];

 const arrayLength = () => {
    for (i = 0; i <numbers.length; i++);
    const solution = numbers.length;
    console.log(solution);
        // return (numbers.length);

 }

arrayLength();






 module.exports = {
     arrayLength: arrayLength,
 }