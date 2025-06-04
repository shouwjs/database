import { BaseEntity } from 'typeorm';
export declare class Main extends BaseEntity {
    key: string;
    value: string;
    user?: string;
    guild?: string;
    channel?: string;
    message?: string;
    role?: string;
}
export declare class Cooldown extends BaseEntity {
    command: string;
    end: number;
    start: number;
    user?: string;
    guild?: string;
    channel?: string;
    global?: boolean;
}
export declare class MongoMain extends Main {
    mongoId?: string;
}
export declare class MongoCooldown extends Cooldown {
    mongoId?: string;
}
export interface MainData {
    key: string;
    value?: string;
    user?: string;
    guild?: string;
    channel?: string;
    message?: string;
    role?: string;
    mongoId?: string;
}
export interface CooldownData {
    command: string;
    end?: number;
    start?: number;
    user?: string;
    guild?: string;
    channel?: string;
    global?: boolean;
    mongoId?: string;
}
export interface DatabaseOptions {
    type: 'mysql' | 'postgres' | 'sqlite' | 'mongodb' | 'better-sqlite3';
    events?: Array<string>;
    url?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    database?: string;
}
