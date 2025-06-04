import { DataSource, type DataSourceOptions } from 'typeorm';
import { type DatabaseOptions, MongoMain, MongoCooldown, Cooldown, Main } from '../typings';

export class Base {
    public readonly options: any;
    public readonly BaseDB: Promise<DataSource>;

    constructor(options: DatabaseOptions) {
        const data = { ...options };
        data.type = data.type ?? 'sqlite';
        if (data.type !== 'mongodb') data.database = data.database ?? 'shouw.db';

        const config = { ...data } as DataSourceOptions;
        if (config.type === 'mongodb') Object.assign(config, { useUnifiedTopology: true });

        const _options = {
            ...config,
            entities: [data.type === 'mongodb' ? MongoMain : Main, data.type === 'mongodb' ? MongoCooldown : Cooldown],
            synchronize: true
        };

        this.options = _options;
        this.BaseDB = new DataSource(this.options as DataSourceOptions).initialize();
    }

    public get Main(): typeof Main | typeof MongoMain {
        return this.options.entities[0];
    }

    public get Cooldown(): typeof Cooldown | typeof MongoCooldown {
        return this.options.entities[1];
    }
}
