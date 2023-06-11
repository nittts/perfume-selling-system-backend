import { Router } from "express";
import clientsController from "../../controllers/clients";

// Middlewares
import validateSchema from "../../middlewares/validateSchema.middleware";

// Schemas
import { createUser } from "../../schemas/clients/validate.schemas";

const clientRouter = Router();
const controller = new clientsController();

clientRouter.post("/create", validateSchema(createUser, "body"), controller.create);

export default clientRouter;
