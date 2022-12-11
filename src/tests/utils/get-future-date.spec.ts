import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test('increases date with one year', () => {
  const year = new Date().getFullYear() + 1

  expect(getFutureDate('2022-12-11').getFullYear()).toEqual(year)
})