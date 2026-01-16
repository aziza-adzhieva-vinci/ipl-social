export function isValidEmail(email: string): boolean {
  
  if (email.includes(" ")) return false;

  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;

  
  const before = email.slice(0, atIndex);
  const after = email.slice(atIndex + 1);
  if (before.length === 0 || after.length === 0) return false;

  
  if (!after.includes(".")) return false;
  if (after.endsWith(".")) return false;

  return true;
}
