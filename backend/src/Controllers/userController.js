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
exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
const userService_1 = require("../Services/userService");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = req.body;
        const user = yield (0, userService_1.registerUserService)(email, password, name);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const token = yield (0, userService_1.loginUserService)(name, email, password);
        res.json({ token });
    }
    catch (error) {
        res.status(401).json({ message: "nevtrehed aldaa garlaa", error });
    }
});
exports.loginUser = loginUser;
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield (0, userService_1.getUserProfileService)((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
        res.json(user);
    }
    catch (error) {
        res.status(404).json({ error: "User not found" });
    }
});
exports.getUserProfile = getUserProfile;
