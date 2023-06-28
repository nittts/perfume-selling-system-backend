import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const initVector = "a2xhcgAAAAAAAAAA";
const securityKey = crypto.createHash("sha256").update("Nixnogen").digest();

function encrypt(message: string) {
  const cipher = crypto.createCipheriv(ALGORITHM, securityKey, initVector);

  let encryption: any = cipher.update(message);

  return Buffer.concat([encryption, cipher.final()]).toString("base64");
}

function decrypt(encryptionData: string) {
  if (encryptionData === null || typeof encryptionData === "undefined" || encryptionData === "") {
    return encryptionData;
  }
  const decipher = crypto.createDecipheriv(ALGORITHM, securityKey, initVector);

  let decryption: any = decipher.update(encryptionData, "base64");

  return Buffer.concat([decryption, decipher.final()]).toString();
}

export { encrypt, decrypt };
