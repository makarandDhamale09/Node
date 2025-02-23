import bcrypt from "bcrypt";

export class UserModel {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = this.encryptPassword(password);
  }

  private encryptPassword(plainPassword: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds); // Generate a salt
    return bcrypt.hashSync(plainPassword, salt); // Hash the password
  }
}
