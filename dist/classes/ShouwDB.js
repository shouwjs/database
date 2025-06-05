"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShouwDB = void 0;
const Database_1 = require("./Database");
class ShouwDB extends Database_1.Database {
    initialize(client) {
        this.client = client;
        this.client.database = this;
        return this;
    }
}
exports.ShouwDB = ShouwDB;
