import fs from 'node:fs';
import { config } from './config';

export const initializeDirectories = () => {
    if ( ! fs.existsSync(config.paths.storage) ) fs.mkdirSync(config.paths.storage);
    if ( ! fs.existsSync(config.paths.cache) ) fs.mkdirSync(config.paths.cache);
    if ( ! fs.existsSync(config.paths.logs) ) fs.mkdirSync(config.paths.logs);
    if ( ! fs.existsSync(config.paths.requests) ) fs.mkdirSync(config.paths.requests);
};
