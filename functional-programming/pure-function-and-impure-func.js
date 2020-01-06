/* A pure function is a function which:
- Given the same input, will always return the same output.
- Produces no side effects. */

const double = x => x * 2;

// Impure function examples
Math.random(); // => 0.4011148700956255
Math.random(); // => 0.8533405303023756
Math.random(); // => 0.3550692005082965

/* Even though we didn’t pass any arguments into any of the function calls, 
they all produced different output. */
