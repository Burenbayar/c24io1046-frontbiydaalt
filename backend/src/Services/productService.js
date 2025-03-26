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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductService = exports.updateProductService = exports.getProductByIdService = exports.getProductsService = exports.createProductService = void 0;
const database_1 = __importDefault(require("../database/database"));
const createProductService = (image, name, price, color, description) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.default.product.create({
        data: {
            image,
            name,
            price,
            color,
            description
        },
    });
});
exports.createProductService = createProductService;
const getProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.default.product.findMany({
        select: {
            id: true,
            image: true,
            name: true,
            price: true,
            color: true,
        },
    });
});
exports.getProductsService = getProductsService;
const getProductByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.default.product.findUnique({
        where: { id },
        select: {
            id: true,
            image: true,
            name: true,
            price: true,
            color: true,
            description: true,
        },
    });
});
exports.getProductByIdService = getProductByIdService;
const updateProductService = (id, name, price, description) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.default.product.update({
        where: { id },
        data: { name, price, description },
    });
});
exports.updateProductService = updateProductService;
const deleteProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.default.product.delete({
        where: { id },
    });
});
exports.deleteProductService = deleteProductService;
