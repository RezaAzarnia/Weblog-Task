import jwt from "jsonwebtoken";
type User = {
  username: string;
  password: string;
};
export function verifyJWT(token: string): User {
  try {
    if(!token.startsWith("Bearer")) {
      throw new Error("invalid authorization header ");
    }
    const splitedToken = token?.split(" ").at(1) as string;
    const user = jwt.verify(splitedToken, process.env.JWT_SECRET || "") as User;
    return user;
  } catch (error: any) {
    throw new jwt.JsonWebTokenError("Invalid token");
  }
}
