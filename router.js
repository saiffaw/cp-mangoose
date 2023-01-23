import Express from "express";
import controler from "./contoler.js";
const router = Express.Router();

router.post("/users", controler.addUser);
router.get("/users", controler.addUsders);
router.get("/users/:id", controler.findUser);
router.patch("/users/:id", controler.updateUser);
router.delete("/users/:id", controler.deletUsers);

export default router;
