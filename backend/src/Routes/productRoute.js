"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../Controllers/productController");
const tokenMiddleware_1 = require("../Middlewares/tokenMiddleware");
const router = express_1.default.Router();
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
router.post("/", asyncHandler(productController_1.createProduct));
router.get("/", asyncHandler(productController_1.getProduct));
router.get("/:id", asyncHandler(productController_1.getProductById));
router.put("/:id", tokenMiddleware_1.authenticateJWT, asyncHandler(productController_1.updateProduct));
router.delete("/:id", tokenMiddleware_1.authenticateJWT, asyncHandler(productController_1.deleteProduct));
exports.default = router;
