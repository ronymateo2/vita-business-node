"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../../config"));
var middleware_1 = require("../../middleware");
var getTransactions = function () {
    return middleware_1.apiCall({
        url: config_1.default.getTransactionsUrl(),
        method: 'get',
        type: config_1.default.GET_TRANSACTIONS,
    });
};
var getTransaction = function (id) {
    return middleware_1.apiCall({
        url: config_1.default.getTransactionsUrl() + "/" + id,
        method: 'get',
        type: config_1.default.GET_TRANSACTIONS,
    });
};
var createRecharge = function (data) {
    return middleware_1.apiCall({
        url: config_1.default.getTransactionsUrl(),
        method: 'post',
        type: config_1.default.CREATE_RECHARGE,
        data: data,
    });
};
var createPurchase = function (data) {
    return middleware_1.apiCall({
        url: config_1.default.getTransactionsUrl(),
        method: 'post',
        type: config_1.default.CREATE_PURCHASE,
        data: data,
    });
};
var createWithdrawal = function (data) {
    return middleware_1.apiCall({
        url: config_1.default.getTransactionsUrl(),
        method: 'post',
        type: config_1.default.CREATE_WITHDRAWAL,
        data: data,
    });
};
var createSend = function (data) {
    return middleware_1.apiCall({
        url: config_1.default.getTransactionsUrl(),
        method: 'post',
        type: config_1.default.CREATE_SEND,
        data: data,
    });
};
exports.default = {
    getTransactions: getTransactions,
    getTransaction: getTransaction,
    createRecharge: createRecharge,
    createPurchase: createPurchase,
    createWithdrawal: createWithdrawal,
    createSend: createSend,
};