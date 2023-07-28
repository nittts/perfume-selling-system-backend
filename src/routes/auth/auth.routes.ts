import { Router } from "express";
import authController from "../../controllers/auth/__index";

// Middlewares
import validateSchema from "../../middlewares/validateSchema.middleware";
import verifyToken from "../../middlewares/verifyToken.middleware";

// Schemas
import { forgot, login, logout, otp, resetPassword } from "../../schemas/auth/validate.schemas";

const authRouter = Router();
const controller = new authController();

authRouter.post("/login", validateSchema(login, "body"), controller.login);

authRouter.post("/logout", verifyToken, validateSchema(logout, "body"), controller.logout);

authRouter.post("/forgot", validateSchema(forgot, "body"), controller.forgotPassword);

authRouter.post("/otp", validateSchema(otp, "body"), controller.oneTimePassword);

authRouter.post("/verifyOtp", validateSchema(otp, "body"), controller.verifyOtp);

authRouter.post("/resetPassword", validateSchema(resetPassword, "body"), controller.resetPassword);

export default authRouter;
