
import { Router } from "express";
import UserCreation from "../controllers/user.controller.js";
import authMiddleware from "../middleware/authentication.middleware.js";
import {ApplySchema,ValidationSchema} from "../middleware/validation.js"

const route = Router();

route.post(
  "/api/auth/register",ValidationSchema(ApplySchema),UserCreation.register
);

route.post(
  "/api/auth/login",
  UserCreation.login
);

route.get(
  "/api/auth/me",
  authMiddleware,
  UserCreation.me
);

export default route;

