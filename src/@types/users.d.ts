import userPermission from "../helpers/enums/usersPermissions.enum";

export interface IUserItems {
  id: string;
  name: string;
}

export interface IUserCreate {
  name: string;
  phone?: string;
  permissions: userPermission[];
  type: "ADMIN" | "CLIENT";
  auth: {
    otp?: number;
    password: string;
    email: string;
  };
}

export interface IUser {
  id: string;
  name: string;
  phone: string;
  items: IUserItems[];
  permissions: userPermission[];
  accPaid: number;
  accNotPaid: number;
  type: "ADMIN" | "CLIENT";
  auth: {
    otp: number;
    password: string;
    email: string;
  };
  online: boolean;
  active: string;
}
