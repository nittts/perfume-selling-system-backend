import { Router } from "express";
import usersController from "../../controllers/users/__index";
import userPermission from "../../helpers/enums/usersPermissions.enum";

// Middlewares
import validateSchema from "../../middlewares/validateSchema.middleware";
import authorizationVerify from "../../middlewares/authorization.middleware";
import verifyToken from "../../middlewares/verifyToken.middleware";

// Schemas
import { createUser, updateUser, usersFilters } from "../../schemas/users/validate.schemas";

const userRouter = Router();
const controller = new usersController();

userRouter.post("/create", validateSchema(createUser, "body"), controller.create);

userRouter.delete("/:id", verifyToken, authorizationVerify([userPermission.CLIENT]), controller.delete);

userRouter.patch("/update/myAccount", verifyToken, authorizationVerify([userPermission.CLIENT]), validateSchema(updateUser, "body"), controller.updateMyAccount);

userRouter.patch("/update/:id", verifyToken, authorizationVerify([userPermission.CLIENT]), validateSchema(updateUser, "body"), controller.update);

userRouter.get("/all", verifyToken, authorizationVerify([userPermission.CLIENT]), validateSchema(usersFilters, "query"), controller.findAll);

userRouter.get("/myAccount", verifyToken, authorizationVerify([userPermission.CLIENT]), controller.myAccount);

export default userRouter;
