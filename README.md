## Funding Circle Code Challenge
### By David Rothschild - <david@rothschildsolutions.com>
#### 2/13/17

To install the mocha testing framework, run the following command in the terminal:
```
npm install
```

To run 

```
npm start
```

This runs both driver code itself and the tests. (They are enclosed together for size and simplicity sake).

### Notes


* Time Complexity: Ø(n)^2

* Speed: ~15ms

I don't see a way to reduce complexity of the multiplication table. The functions "printTable" and "MultTable" could be combined, but that would reduce readability without gaining much in the way of speed. 

The MultTable and PrintTable only format correctly out to 4 digit numbers. It could be rewritten to change the padding based on the string length of the longest number generated in the table (that would be, in context, row[length-1]^2).





