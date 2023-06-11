import userPermission from "./enums/usersPermissions.enum";

const checkPermission = (userPerms: number[], permission: userPermission[]) => {
  const verified = permission.some((v) => userPerms.indexOf(v) !== 1);

  if ((permission || []).length === 0) {
    return true;
  }

  if (verified) {
    return true;
  }

  return false;
};

export default checkPermission;
