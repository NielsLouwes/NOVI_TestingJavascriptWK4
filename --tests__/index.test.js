//Importing

const arrayLength = require('../index').arrayLength;

//OR in destructure mode.

// const {arrayLength} = require('../index');



// Writing the test
test(" arrayLength ( ) function should return the length of the given array, named numbers.",() => {
    //ARRANGE

    const numbers = [9,4,5,6,7,3,2,6,4,3,2];


    //ACT
    const arrayLength = () => {
        for (i = 0; i <numbers.length; i++);
        const solution = numbers.length;
        // console.log(solution);
        return (numbers.length);

    }

    //ASSERT
    expect (arrayLength()).toBe(11);
})


