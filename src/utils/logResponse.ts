import fs from 'node:fs';
import { config } from '../config';
import { hash } from './hash';

type LogResponseData = {
    prompt: string;
    response: string;
    code: any;
    openai: {
        model: string;
        requestTime: number;
        tokens: {
            prompt: number | null;
            response: number | null;
            total: number | null;
        };
    };
};

export const logResponse = (data: LogResponseData) => {
    const date = (new Date()).toISOString();
    const hashedPrompt = hash(data.prompt);
    const logFilePath = `${config.paths.requests}/${hashedPrompt}`;
    const logType = config.logType.getLogType();

    if ( logType === 'file' && ! fs.existsSync(logFilePath) ) fs.writeFileSync(logFilePath, '');

    let stringifiedCode = data.code;
    try {
        stringifiedCode = JSON.stringify(data.code, null, 4);
    } catch {}

    const largeSeperator = '==========================================================';
    const smallSeperator = '----------------------------------------------------------';
    let log = '';

    // Date
    log += `Date: ${date}\n`;
    log += `${largeSeperator}\n`;

    // Tokens
    log += `Tokens:\n${smallSeperator}\n`;
    log += `    Prompt: ${data.openai.tokens.prompt}\n`;
    log += `    Response: ${data.openai.tokens.response}\n`;
    log += `    Total: ${data.openai.tokens.total}\n`;
    log += `${largeSeperator}\n`;

    // Prompt
    log += `Prompt:\n${smallSeperator}\n${data.prompt}\n`;
    log += `${largeSeperator}\n`;

    // Response
    log += `Response:\n${smallSeperator}\n${data.response}\n`;
    log += `${largeSeperator}\n`;

    // Code Generated
    log += `Code:\n${smallSeperator}\n${stringifiedCode}`;

    if ( logType === 'file' ) {
        fs.appendFileSync(logFilePath, `${log}\n`, 'utf8');
    } else {
        console.log(log);
    }
};
