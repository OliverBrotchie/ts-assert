# ts-assert
A coding challenge to create basic testing capabilities.

## Assumptions

- Inputs are not or do not contain functions (as values) as only their signature can be tested using Stringify.
- Inputs are not Dates, Hashmaps, HashSets or Regexes for the sake of simlicity - although please do not hesitate to ask for those to be supported as they only require gaurd clauses!

## Tests

Either run the tests locally or view the results on [Github Actions]().

### Run Tests Locally

**Install Deno:**

```sh
curl -fsSL https://deno.land/install.sh | sh
```

**Run tests:**

```sh
git clone https://github.com/OliverBrotchie/ts-assert.git && cd ts-assert && deno test
```