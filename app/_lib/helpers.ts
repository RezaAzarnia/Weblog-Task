import jwt from "jsonwebtoken";
type User = {
  username: string;
  password: string;
};
export function verifyJWT(token: string): User {
  try {
    if (!token.startsWith("Bearer")) {
      console.log(token);
      throw new Error("invalid authorization header ");
    }
    const splitedToken = token?.split(" ").at(1) as string;
    const user = jwt.verify(splitedToken, process.env.JWT_SECRET || "") as User;
    return user;
  } catch (error: any) {
    console.log(error.message)
    throw new jwt.JsonWebTokenError(error.message||"Invalid token");
  }
}

