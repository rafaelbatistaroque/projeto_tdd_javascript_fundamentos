const fizz_buzz = (nr) => {
  if (nr % 3 === 0 && nr % 5 === 0) return "FizzBuzz";
  if (nr % 3 === 0) return "Fizz";
  if (nr % 5 === 0) return "Buzz";

  return nr;
};

export default fizz_buzz;
