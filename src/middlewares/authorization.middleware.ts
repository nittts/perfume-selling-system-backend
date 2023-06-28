import { Request, Response, NextFunction } from "express";
import checkPermission from "../helpers/permission.helper";
import userPermission from "../helpers/enums/usersPermissions.enum";
import LoggerService from "../utils/logger";

const authorizationVerify = (permission: userPermission[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const logger = new LoggerService(req.baseUrl);

    const { permissions, id } = req.user;

    const allowed = checkPermission(permissions, permission) || req.params.id === id;

    if (allowed) {
      next();
    }

    logger.errorObj("Not Authorized", { permissions, id, success: false });

    return res.status(403).send({ success: false, message: "Não autorizado." });
  };
};

export default authorizationVerify;
