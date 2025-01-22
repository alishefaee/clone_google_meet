"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
class CacheHelper {
    constructor() { }
    static getInstance() {
        if (CacheHelper.instance == null) {
            CacheHelper.instance = new node_cache_1.default({ stdTTL: 0, checkperiod: 0 });
        }
        return CacheHelper.instance;
    }
}
CacheHelper.instance = null;
exports.default = CacheHelper.getInstance();
