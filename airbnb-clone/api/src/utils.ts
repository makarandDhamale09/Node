import bcrypt from "bcrypt";

export const encryptPassword = (plainPassword: string): string => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(plainPassword, salt);
};

export const comparePassword = async (
  plainPass: string,
  encryptedPass: string
): Promise<Boolean> => {
  return await bcrypt.compare(plainPass, encryptedPass);
};
