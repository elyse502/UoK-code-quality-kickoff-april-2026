export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * YOUR CODE GOES IN HERE ... * * *

  // 1. Must be exactly 10 characters
  if (password.length !== 10) {
    return false;
  }

  // 2 & 3. Must only contain letters (upper/lowercase) and digits — no special characters
  const validChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (const char of password) {
    if (!validChars.includes(char)) return false;
  }

  // 4. Must contain at least one uppercase, one lowercase letter, AND at least one digit
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  for (const char of password) {
    if (uppercase.includes(char)) hasUpper = true;
    if (lowercase.includes(char)) hasLower = true;
    if (digits.includes(char)) hasDigit = true;
  }
  if (!hasUpper || !hasLower || !hasDigit) return false;

  // 5. No directly ascending or descending sequences of 3+ consecutive digits
  for (let i = 0; i < password.length - 2; i++) {
    const a = password[i];
    const b = password[i + 1];
    const c = password[i + 2];
    // Only check if all three are digits
    if (digits.includes(a) && digits.includes(b) && digits.includes(c)) {
      const numA = digits.indexOf(a);
      const numB = digits.indexOf(b);
      const numC = digits.indexOf(c);
      const isAscending = numB === numA + 1 && numC === numB + 1;
      const isDescending = numB === numA - 1 && numC === numB - 1;
      if (isAscending || isDescending) return false;
    }
  }

  // 6. Must not be a forbidden password
  if (forbiddenPasswords.includes(password)) {
    return false;
  }

  // 7. Must consist of at least 4 different characters (pre-existing check kept as-is)
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
