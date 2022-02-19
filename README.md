# TS Assert
A coding challenge to create simple testing capabilities.


## Assumptions

- Inputs are not or do not contain functions (as values) as only their signature can be tested for.
- Inputs are not Dates, Hashmaps, HashSets or Regexes for the sake of simlicity - although please do not hesitate to ask for those to be supported as they only require gaurd clauses!

## Exports

### assertEquals
Asserts that two values are equal, failing (via AssertionError) if a difference is found. 

**Example:** 
```ts
const expected = [1,2,3];
const actual = [3,2,1];

// Throws AssertionError
assertEquals("Array Test",expected,actual);
```

### assertNotEquals
Asserts that two values are not equal, failing (via AssertionError) if no difference is found. 

**Example:**
```ts
// Does not throw an AssertionError
assertEquals("String Test","Hello","World!");
```

### AssertionError
An AssertionError indicates that a test has failed - allows for easy error message customization.

**Examples:**
```ts
// Returns: Some Error: expected "Hello" but found "World".
throw new AssertionError("Some Error", "Hello","World");

// Returns: Some Error: Object length mismatch, expected 3 but found 4.
throw new AssertionError("Some Error", 3,4, "Object length");

// Returns: Some completley custom error message!
throw new AssertionError("Some completely custom error message!");
```

## Tests

Either run the tests locally or verify the results in [Github Actions](https://github.com/OliverBrotchie/ts-assert/actions)!

### Run Tests Locally

**Install Deno:**

```sh
curl -fsSL https://deno.land/install.sh | sh
```

**Run tests:**

```sh
git clone https://github.com/OliverBrotchie/ts-assert.git && cd ts-assert && deno test
```