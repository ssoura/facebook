import jwt from "jsonwebtoken";

export function generateToken(payload, expired) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expired,
  });
}
