import { Router } from "express";
import authController from "../../controllers/auth";

// Middlewares
import validateSchema from "../../middlewares/validateSchema.middleware";

// Schemas
import { forgot, login } from "../../schemas/auth/validate.schema";

const authRouter = Router();
const controller = new authController();

authRouter.post("/login", validateSchema(login, "body"), controller.login);

authRouter.post("/logout", controller.logout);

authRouter.post("/forgot", validateSchema(forgot, "body"), (req, res) => {});

export default authRouter;
