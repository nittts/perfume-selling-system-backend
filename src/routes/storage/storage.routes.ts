import { Router } from "express";
import StorageController from "../../controllers/storage";

// Middlewares
import validateSchema from "../../middlewares/validateSchema.middleware";

// Schemas
import { ProductCreate, ProductEdit, ProductsFilters } from "../../schemas/storage/validate.schemas";

const storageRouter = Router();
const controller = new StorageController();

storageRouter.get("/", validateSchema(ProductsFilters, "query"), controller.findAll);

storageRouter.get("/:id", validateSchema(ProductsFilters, "query"), controller.findById);

storageRouter.post("/", validateSchema(ProductCreate, "body"), controller.create);

storageRouter.post("/batch", controller.batchCreate);

storageRouter.put("/:id", validateSchema(ProductEdit, "body"), controller.edit);

storageRouter.delete("/", controller.delete);

export default storageRouter;
