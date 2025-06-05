import { Database } from './Database';
import type { ShouwClient } from 'shouw.js';
export declare class ShouwDB extends Database {
    client?: ShouwClient;
    initialize(client: ShouwClient): ShouwDB;
}
