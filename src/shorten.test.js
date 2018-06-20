import { shorten } from "./shorten";

test('shorten "lorem ipsum" to "lor..."', () => {
  const actualValue = shorten("lorem ipsum", 6);
  expect(actualValue).toEqual("lor...");
});
