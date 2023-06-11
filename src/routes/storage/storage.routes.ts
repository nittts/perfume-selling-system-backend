import { Router } from "express";
import StorageController from "../../controllers/storage";
import userPermission from "../../helpers/enums/usersPermissions.enum";

// Middlewares
import validateSchema from "../../middlewares/validateSchema.middleware";
import authorizationVerify from "../../middlewares/authorization.middleware";
import verifyToken from "../../middlewares/verifyToken.middleware";

// Schemas
import { ProductCreate, ProductEdit, ProductsFilters } from "../../schemas/storage/validate.schemas";

const storageRouter = Router();
const controller = new StorageController();

storageRouter.get(
  "/",
  verifyToken,
  authorizationVerify([userPermission.STORAGE]),
  validateSchema(ProductsFilters, "query"),
  controller.findAll
);

storageRouter.get(
  "/:id",
  verifyToken,
  authorizationVerify([userPermission.STORAGE]),
  validateSchema(ProductsFilters, "query"),
  controller.findById
);

storageRouter.post(
  "/",
  verifyToken,
  authorizationVerify([userPermission.STORAGE]),
  validateSchema(ProductCreate, "body"),
  controller.create
);

storageRouter.post("/batch", 
  verifyToken, 
  authorizationVerify([userPermission.STORAGE]), 
  controller.batchCreate
);

storageRouter.put(
  "/:id",
  verifyToken,
  authorizationVerify([userPermission.STORAGE]),
  validateSchema(ProductEdit, "body"),
  controller.edit
);

storageRouter.delete("/", 
  verifyToken, 
  authorizationVerify([userPermission.STORAGE]), 
  controller.delete
);

export default storageRouter;
