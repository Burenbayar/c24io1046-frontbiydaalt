import prisma from "../database/database";
import { hashPassword,comparePasswords } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";

export const registerUserService = async (email: string, password: string, name: string) => {
  const encryptPassword = hashPassword(password);

  return prisma.user.create({
    data: { email, password: encryptPassword, name },
  });
};

export const loginUserService = async (name: string, email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = comparePasswords(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }
  console.log(isPasswordValid)

  const token = generateToken(user.id);
  return token;
};

export const getUserProfileService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
