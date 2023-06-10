export interface IUserItems {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  name: string;
  phone: string;
  items: IUserItems[];
  accPaid: number;
  accNotPaid: number;
  type: "ADMIN" | "CLIENT";
  auth: {
    otp: number;
    password: string;
    email: string;
  };
  online: false;
  active: string;
  lastVisitedPage: string;
}
