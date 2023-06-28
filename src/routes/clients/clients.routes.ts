import { Router } from "express";
import clientsController from "../../controllers/clients";
import userPermission from "../../helpers/enums/usersPermissions.enum";

// Middlewares
import validateSchema from "../../middlewares/validateSchema.middleware";
import authorizationVerify from "../../middlewares/authorization.middleware";
import verifyToken from "../../middlewares/verifyToken.middleware";

// Schemas
import { createUser } from "../../schemas/clients/validate.schemas";

const clientRouter = Router();
const controller = new clientsController();

clientRouter.post("/create", validateSchema(createUser, "body"), controller.create);

clientRouter.delete("/:id", verifyToken, authorizationVerify([userPermission.CLIENT]), controller.delete);

export default clientRouter;
