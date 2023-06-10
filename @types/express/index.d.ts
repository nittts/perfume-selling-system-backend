import { IUser } from "../../src/@types/users";
import * as express from "express";

declare global {
  namespace Express {
    export interface Request {
      user: IUser;
    }
  }
}
