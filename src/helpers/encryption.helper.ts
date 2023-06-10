import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const initVector = crypto.randomBytes(16);
const securityKey = crypto.randomBytes(32);

function encrypt(message: string) {
  const cipher = crypto.createCipheriv(ALGORITHM, securityKey, initVector);

  let encryption = cipher.update(message, "utf-8", "hex");

  encryption += cipher.final("hex");

  return encryption;
}

function decrypt(encryptionData: string) {
  const decipher = crypto.createDecipheriv(ALGORITHM, securityKey, initVector);

  let decryption = decipher.update(encryptionData, "hex", "utf-8");

  decryption += decipher.final("utf-8");

  return decryption;
}

export { encrypt, decrypt };
