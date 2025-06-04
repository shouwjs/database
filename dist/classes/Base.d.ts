import { DataSource } from 'typeorm';
import { type DatabaseOptions, MongoMain, MongoCooldown, Cooldown, Main } from '../typings';
export declare class Base {
    readonly options: any;
    readonly BaseDB: Promise<DataSource>;
    constructor(options: DatabaseOptions);
    get Main(): typeof Main | typeof MongoMain;
    get Cooldown(): typeof Cooldown | typeof MongoCooldown;
}
