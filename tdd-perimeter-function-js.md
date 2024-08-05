Use your JavaScript & Jest skills to test drive your solution to a problem.

## Getting Started

```no-highlight
et get tdd-perimeter-function-js
cd tdd-perimeter-function-js
yarn install
code .
```

For this assignment, a majority of the code you will write will be in the `perimeter.js` file. Your goal is to get each of the tests to pass.

In the browser, open up the JavaScript console. You can refresh the page in order to see your changes.

### Instructions

To start, run `yarn run test` in order to examine the error that is generating when the provided tests fails.

Examine the code in `src/_tests_/perimeter.test.js` file to take a closer look at the test itself. The first test is looking to confirm the existence of a `perimeter` function.  While you had declared a perimeter variable earlier, we'll need it to be a function. Additionally, the function will need to be able to receive two arguments and return the computed perimeter.

In `perimeter.js`, write your function. Your goal is to satisfy the test suite and see an output like this:

```no-highlight
yarn run v1.12.3
jest
 PASS  tests/main.test.js
  ✓ it defines perimeter (5ms)
  ✓ it does not allow both arguments to be 0 (1ms)
  ✓ it takes in two arguments and returns a positive number (1ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.223s
Ran all test suites.
✨  Done in 4.17s.
```

Your perimeter function may require some conditional statements, so pay attention to what your tests are expecting of you!

Hints: In order for the function to `.beDefined` it will need a return value that is NOT undefined.

Use a `console.log` as needed to manually test your function's output. 

### Sample Output

```no-highlight
perimeter(3, 5)  // returns 16
```

### Write Your Own Tests

Now it is your turn! Add a new test file to the `_tests_` folder called `circumference.test.js`. This file should test a function named `circumference`, which should be imported from it's own file in your `src` folder.

Your tests should:

* ensure that the `circumference` is generating the right solution for a circle's circumference i.e. c = 2πr, where `c` is the circumference we are solving for, `r` is the radius, and π is the mathematical symbol for pi.
* This function should accept a radius as an input, and return the circumference.
* Control for boundary conditions such as 0 or numbers below zero (these should throw an error message!)
