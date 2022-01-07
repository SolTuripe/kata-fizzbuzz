const fizzBuzz = require("../src/fizzBuzz");

test('when the number is a multiple of 3 and 5 it should return "FizzBuzz"', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(45)).toBe("FizzBuzz");
  expect(fizzBuzz(60)).toBe("FizzBuzz");
});

test('when the number is a multiple of 5 it should return "Buzz"', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(10)).toBe("Buzz");
  expect(fizzBuzz(55)).toBe("Buzz");
  expect(fizzBuzz(100)).toBe("Buzz");
});

test('when the number is a multiple of 3 it should return "Fizz"', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(9)).toBe("Fizz");
  expect(fizzBuzz(6)).toBe("Fizz");
  expect(fizzBuzz(99)).toBe("Fizz");

  expect(fizzBuzz(15)).not.toBe("Fizz");
});

test("when the number is not a multiple of 3 or 5 it should return the number", () => {
  expect(fizzBuzz(8)).toBe(8);
  expect(fizzBuzz(14)).toBe(14);
  expect(fizzBuzz(11)).toBe(11);
  expect(fizzBuzz(19)).toBe(19);
});
