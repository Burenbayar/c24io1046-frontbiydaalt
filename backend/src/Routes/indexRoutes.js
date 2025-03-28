"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoute_1 = __importDefault(require("./productRoute"));
const userRoute_1 = __importDefault(require("./userRoute"));
const router = express_1.default.Router();
router.use("/products", productRoute_1.default);
router.use("/users", userRoute_1.default);
exports.default = router;
