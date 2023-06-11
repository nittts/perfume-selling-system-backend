import { Request, Response, NextFunction } from "express";
import checkPermission from "../helpers/permission.helper";
import userPermission from "../helpers/enums/usersPermissions.enum";

const authorizationVerify = (permission: userPermission[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { permissions } = req.user;

    const allowed = checkPermission(permissions, permission);

    if (allowed) {
      next();
    }

    return res.status(403).send({ success: false, message: "Não autorizado." });
  };
};

export default authorizationVerify;
