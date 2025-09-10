export const encodeEmail = (email: string) =>
  email.replace(/\./g, "_").replace(/@/g, "_at_");