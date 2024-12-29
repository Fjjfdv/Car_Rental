const express = require("express");
const adminController = require("../controllers/admin-controller");
// const getAllContacts = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers); // authMiddleware check kr rha h user login h ya nhi fir adminMiddleware check karega isAdmin: true h ya nhi agr h tabhi vo aage pass hoga aur admin ko user k data show hoga

router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserByID);

router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUserById) // update ke liye patch method ka use krte h

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById); // frontend se jo id pass ki h usko hum url se get kerege

router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router.route('/contacts/delete/:id').get(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;




