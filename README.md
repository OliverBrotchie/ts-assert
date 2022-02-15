# TS Assert
A coding challenge to create basic testing capabilities.

## Assumptions

- Inputs are not or do not contain functions (as values) as only their signature can be tested for.
- Inputs are not Dates, Hashmaps, HashSets or Regexes for the sake of simlicity - although please do not hesitate to ask for those to be supported as they only require gaurd clauses!

## Tests

Either run the tests locally or view the results in [Github Actions]()!

### Run Tests Locally

**Install Deno:**

```sh
curl -fsSL https://deno.land/install.sh | sh
```

**Run tests:**

```sh
git clone https://github.com/OliverBrotchie/ts-assert.git && cd ts-assert && deno test
```