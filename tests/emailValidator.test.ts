import { isValidEmail } from "../src/emailValidator";

describe("Email validator", () => {
  test("invalid if missing @", () => {
    expect(isValidEmail("abc.def")).toBe(false);
  });

  test("invalid if contains spaces", () => {
    expect(isValidEmail("a b@c.com")).toBe(false);
  });

  test("invalid if no text before @", () => {
    expect(isValidEmail("@domain.com")).toBe(false);
  });

  test("invalid if no text after @", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

  test("invalid if domain has no dot", () => {
    expect(isValidEmail("test@domain")).toBe(false);
  });

  test("invalid if domain dot is last character", () => {
    expect(isValidEmail("test@domain.")).toBe(false);
  });

  test("valid email", () => {
    expect(isValidEmail("test@domain.com")).toBe(true);
  });
});
