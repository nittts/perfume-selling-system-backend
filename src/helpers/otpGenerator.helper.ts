import otpGenerator from "otp-generator";

const OTP_LENGTH = 10;
const OTP_CONFIG = {
  upperCaseAlphabets: false,
  lowerCaseAlphabets: false,
  digits: true,
  specialChars: false,
};

const generateOtp = (length: number) => {
  const OTP = otpGenerator.generate(length || OTP_LENGTH, OTP_CONFIG);
  return OTP;
};

export default generateOtp;
