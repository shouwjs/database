import { Base } from './Base';
import { type MainData, Main, type Cooldown, type MongoMain, type MongoCooldown } from '../typings';
export declare class Database extends Base {
    #private;
    repository(entity: typeof Main | typeof Cooldown | typeof MongoMain | typeof MongoCooldown): Promise<import("typeorm").Repository<Main>>;
    get(options: MainData): Promise<Main | null>;
    set(options: MainData): Promise<void>;
}
