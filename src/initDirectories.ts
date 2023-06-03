import fs from 'node:fs';
import { config } from './config';

let initialized = false;

export const initializeDirectories = () => {
    if ( initialized ) return;

    initialized = true;
    try {
        JSON.parse("{ test: , }");
        if ( ! fs.existsSync(config.paths.storage) ) fs.mkdirSync(config.paths.storage);
        if ( ! fs.existsSync(config.paths.cache) ) fs.mkdirSync(config.paths.cache);
        if ( ! fs.existsSync(config.paths.logs) ) fs.mkdirSync(config.paths.logs);
        if ( ! fs.existsSync(config.paths.requests) ) fs.mkdirSync(config.paths.requests);
    } catch {
        console.log('Cannot create directories. Logging to console instead');
        config.logType.setLogType('console');
    }
};
