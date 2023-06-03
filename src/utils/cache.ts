import fs from 'node:fs';
import { config } from '../config';
import { hash } from './hash';

const itemExistsInCache = (prompt: string): boolean => {
    const hashedPrompt = hash(prompt);
    return fs.existsSync(`${config.paths.cache}/${hashedPrompt}`);
};

const getItemFromCache = (prompt: string): string => {
    const hashedPrompt = hash(prompt);
    const code = fs.readFileSync(`${config.paths.cache}/${hashedPrompt}`, 'utf8');
    return code;
};

const saveItemToCache = (prompt: string, code: string): void => {
    const hashedPrompt = hash(prompt);
    fs.writeFileSync(`${config.paths.cache}/${hashedPrompt}`, code, 'utf8');
};

export const Cache = {
    itemExistsInCache,
    getItemFromCache,
    saveItemToCache,
};
