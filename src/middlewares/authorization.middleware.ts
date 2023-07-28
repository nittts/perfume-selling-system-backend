import { Request, Response, NextFunction } from "express";
import checkPermission from "../helpers/permission.helper";
import userPermission from "../helpers/enums/usersPermissions.enum";

const authorizationVerify = (permission: userPermission[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { permissions, id, type } = req.user;

    const allowed = checkPermission(permissions, permission) || req.params.id === id;

    if (type === "ADMIN") {
      return next();
    }

    if (type === "CLIENT" && allowed) {
      return next();
    }

    return res.status(403).send({ success: false, message: "Não autorizado." });
  };
};

export default authorizationVerify;
