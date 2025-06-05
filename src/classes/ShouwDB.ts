import { Database } from './Database';
import type { ShouwClient } from 'shouw.js';

export class ShouwDB extends Database {
    public client?: ShouwClient;

    public initialize(client: ShouwClient): ShouwDB {
        this.client = client;
        this.client.database = this;
        return this;
    }
}
