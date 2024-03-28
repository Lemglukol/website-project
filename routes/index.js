import express from "express";
import controller from "../controller/Users.js"
import middleware from "../middleware/VerifyToken.js"
import refresh from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/users', middleware.verifyToken,controller.getUsers);
router.get('/data', controller.getData);
router.post('/users', controller.Register);
router.post('/login', controller.login);
router.get('/token', refresh.refreshToken);
router.delete('/logout', controller.logout);

export default router;