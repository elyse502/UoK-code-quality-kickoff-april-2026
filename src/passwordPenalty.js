/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (!password) return 0;
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  let totalPenalty = 0;
  let sequenceLength = 1;

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      sequenceLength++;
    } else {
      if (sequenceLength === 2) totalPenalty += 1;
      if (sequenceLength >= 3) totalPenalty += 2;
      sequenceLength = 1;
    }
  }

  // Final check to catch a sequence that runs to the end of the password
  if (sequenceLength === 2) totalPenalty += 1;
  if (sequenceLength >= 3) totalPenalty += 2;

  return totalPenalty;
}
