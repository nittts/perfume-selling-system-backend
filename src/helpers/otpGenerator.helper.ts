import otpGenerator from "otp-generator";

const OTP_LENGTH = 10;
const OTP_CONFIG = {
  upperCaseAlphabets: true,
  specialChars: false,
};

const generate = (length: number) => {
  const OTP = otpGenerator.generate(length || OTP_LENGTH, OTP_CONFIG);
  return OTP;
};

export default generate;
