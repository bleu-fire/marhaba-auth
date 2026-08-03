
import { Router } from "express";
import UserCreation from "../controllers/user.controller.js";
import authMiddleware from "../middleware/authentication.middleware.js";
import {ApplySchema,RegisterSchema,ValidationSchema} from "../middleware/validation.js"

const route = Router();

route.post(
  "/api/auth/register",
  ValidationSchema(RegisterSchema),
  UserCreation.register
);

route.post(
  "/api/auth/login",
  ValidationSchema(ApplySchema)
  ,UserCreation.login
);

route.get(
  "/api/auth/me",
  authMiddleware,
  UserCreation.me
);

route.post(
  "/api/auth/refresh",
  UserCreation.refresh
);

export default route;

