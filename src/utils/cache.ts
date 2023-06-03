import fs from 'node:fs';
import { config } from '../config';
import { hash } from './hash';

const itemExistsInCache = (prompt: string): boolean => {
    if ( config.logType.getLogType() !== 'file' ) return false;
    const hashedPrompt = hash(prompt);
    return fs.existsSync(`${config.paths.cache}/${hashedPrompt}`);
};

const getItemFromCache = (prompt: string): string => {
    if ( config.logType.getLogType() !== 'file' ) return '';
    const hashedPrompt = hash(prompt);
    const code = fs.readFileSync(`${config.paths.cache}/${hashedPrompt}`, 'utf8');
    return code;
};

const saveItemToCache = (prompt: string, code: string): void => {
    if ( config.logType.getLogType() !== 'file' ) return;
    const hashedPrompt = hash(prompt);
    fs.writeFileSync(`${config.paths.cache}/${hashedPrompt}`, code, 'utf8');
};

export const Cache = {
    itemExistsInCache,
    getItemFromCache,
    saveItemToCache,
};
