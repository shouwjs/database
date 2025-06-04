import { Entity, PrimaryColumn, BaseEntity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Main extends BaseEntity {
    @PrimaryColumn()
    key!: string;

    @Column({ nullable: false, default: void 0 })
    value!: string;

    @Column({ nullable: true })
    user?: string;

    @Column({ nullable: true })
    guild?: string;

    @Column({ nullable: true })
    channel?: string;

    @Column({ nullable: true })
    message?: string;

    @Column({ nullable: true })
    role?: string;
}

@Entity()
export class Cooldown extends BaseEntity {
    @PrimaryColumn()
    command!: string;

    @Column({ nullable: false, default: 0 })
    end!: number;

    @Column({ nullable: false, default: 0 })
    start!: number;

    @Column({ nullable: true })
    user?: string;

    @Column({ nullable: true })
    guild?: string;

    @Column({ nullable: true })
    channel?: string;

    @Column({ nullable: true })
    global?: boolean;
}

@Entity()
export class MongoMain extends Main {
    @ObjectIdColumn()
    mongoId?: string;
}

@Entity()
export class MongoCooldown extends Cooldown {
    @ObjectIdColumn()
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
