import { encode, decode } from "js-base64";

export const encodeData = (obj) => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64) => {
  if (!base64) return null;
  try {
    return JSON.parse(decode(base64));
  } catch {
    return null;
  }
};
