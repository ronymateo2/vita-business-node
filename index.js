"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __importDefault(require("./src"));
src_1.default.config({
    X_Login: 'X_Login',
    X_Trans_Key: 'X_Trans_Key',
    secret: 'secret',
    env: 'qa',
});
/*
const f = async () => {
    try {
        await Business.wallets('uuid start77').recharge({});
    } catch (e) {
        console.log(e);
    }
};

f();*/
