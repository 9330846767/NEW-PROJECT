import { Router } from "express";
 
import { userHandler} from "../controllers/user.controller";

import { resetPassword } from "../controllers/resetpassword.controller";
const router = Router()


router.route("/register").post(userHandler)

router.route("/resetPassword").post(resetPassword)

export default {resetPassword}