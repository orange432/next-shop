import { createHash } from "crypto";

export const randomString = (length: number) => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charslen = chars.length;
  let out = "";
  for(let i=0;i<length;i++){
    out += chars.charAt(Math.floor(Math.random()*charslen));
  }
  return out;
}

export const sha256 = (input: string) => {
  return createHash("sha256").update(input).digest("base64");
}