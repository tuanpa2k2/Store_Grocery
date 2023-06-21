const express = require("express");
const productController = require("../controllers/ProductController");
const { authMiddleWare } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", productController.createProduct);
router.put("/update/:id", authMiddleWare, productController.updateProduct);
router.get("/get-details/:id", productController.getDetailsProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.get("/get-all", productController.getAllProduct);

module.exports = router;
