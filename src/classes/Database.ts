import { Base } from './Base';
import { DataSource } from 'typeorm';
import { type MainData, Main, type Cooldown, type MongoMain, type MongoCooldown } from '../typings';

export class Database extends Base {
    #db?: DataSource;

    public async repository(entity: typeof Main | typeof Cooldown | typeof MongoMain | typeof MongoCooldown) {
        if (!(this.#db instanceof DataSource)) this.#db = await this.BaseDB;
        return this.#db.getRepository(entity);
    }

    public async get(options: MainData): Promise<Main | null> {
        const main = await this.repository(Main);
        return await main.findOneBy(options);
    }

    public async set(options: MainData): Promise<void> {
        const newData = new Main();
        newData.key = options.key;
        newData.value = options.value as string;
        newData.guild = options.guild;
        newData.user = options.user;
        newData.channel = options.channel;
        newData.message = options.message;
        newData.role = options.role;

        const oldData = await this.get(options);
        const main = await this.repository(this.Main);
        if (oldData && this.options.type === 'mongodb') {
            await main.update(oldData as object, newData);
        } else {
            await main.save(newData);
        }
    }
}
