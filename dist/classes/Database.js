"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Database_db;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const Base_1 = require("./Base");
const typeorm_1 = require("typeorm");
const typings_1 = require("../typings");
class Database extends Base_1.Base {
    constructor() {
        super(...arguments);
        _Database_db.set(this, void 0);
    }
    async repository(entity) {
        if (!(__classPrivateFieldGet(this, _Database_db, "f") instanceof typeorm_1.DataSource))
            __classPrivateFieldSet(this, _Database_db, await this.BaseDB, "f");
        return __classPrivateFieldGet(this, _Database_db, "f").getRepository(entity);
    }
    async get(options) {
        const main = await this.repository(typings_1.Main);
        return await main.findOneBy(options);
    }
    async set(options) {
        const newData = new typings_1.Main();
        newData.key = options.key;
        newData.value = options.value;
        newData.guild = options.guild;
        newData.user = options.user;
        newData.channel = options.channel;
        newData.message = options.message;
        newData.role = options.role;
        const oldData = await this.get(options);
        const main = await this.repository(this.Main);
        if (oldData && this.options.type === 'mongodb') {
            await main.update(oldData, newData);
        }
        else {
            await main.save(newData);
        }
    }
}
exports.Database = Database;
_Database_db = new WeakMap();
