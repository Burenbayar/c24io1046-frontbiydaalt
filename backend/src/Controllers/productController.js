"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getProduct = exports.createProduct = void 0;
const productService_1 = require("../Services/productService");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { image, name, price, color, description } = req.body;
        const product = yield (0, productService_1.createProductService)(image, name, price, color, description);
        res.status(201).json(product);
        console.log(product);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create product" });
    }
});
exports.createProduct = createProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productService_1.getProductsService)();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to retrieve products" });
    }
});
exports.getProduct = getProduct;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, productService_1.getProductByIdService)(req.params.id);
        if (!product)
            return res.sendStatus(404);
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to retrieve product" });
    }
});
exports.getProductById = getProductById;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, description } = req.body;
        const updatedProduct = yield (0, productService_1.updateProductService)(req.params.id, name, price, description);
        res.json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update product" });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, productService_1.deleteProductService)(req.params.id);
        res.json({ message: "Product deleted" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
});
exports.deleteProduct = deleteProduct;
