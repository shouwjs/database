"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const typeorm_1 = require("typeorm");
const typings_1 = require("../typings");
class Base {
    constructor(options) {
        const data = { ...options };
        data.type = data.type ?? 'sqlite';
        if (data.type !== 'mongodb')
            data.database = data.database ?? 'shouw.db';
        const config = { ...data };
        if (config.type === 'mongodb')
            Object.assign(config, { useUnifiedTopology: true });
        const _options = {
            ...config,
            entities: [data.type === 'mongodb' ? typings_1.MongoMain : typings_1.Main, data.type === 'mongodb' ? typings_1.MongoCooldown : typings_1.Cooldown],
            synchronize: true
        };
        this.options = _options;
        this.BaseDB = new typeorm_1.DataSource(this.options).initialize();
    }
    get Main() {
        return this.options.entities[0];
    }
    get Cooldown() {
        return this.options.entities[1];
    }
}
exports.Base = Base;
