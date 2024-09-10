
import { Router } from "express";
 
import { userHandler} from "../controllers/user.controller";

import { forgatePassword } from "../controllers/forgatepassword.controller";

const router = Router()


router.route("/register").post(userHandler)

router.route("/fogatePassword").post(forgatePassword)

export default {forgatePassword}