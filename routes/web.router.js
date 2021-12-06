const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const userInfoController = require("../apps/controllers/user-info.controller");
//Users Routing
// router.get("/users", checkToken, userController.getUsers);
// router.post("/users", userController.createUser);
// router.get("/users/:id", checkToken, userController.getUserByUserId);
// router.post("/users/login", userController.login);
// router.patch("/users", checkToken, userController.updateUsers);
// router.delete("/users", checkToken, userController.deleteUser);

module.exports = router;