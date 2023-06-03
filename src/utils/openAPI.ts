import { config } from '../config';
import { Cache } from './cache';
import { getCodeFromText } from './getCodeFromResponse';
import { logResponse } from './logResponse';

const getResponse = async (prompt: string) => {
    const cacheExists = Cache.itemExistsInCache(prompt);
    if ( cacheExists ) {
        return getCodeFromText(Cache.getItemFromCache(prompt));
    }

    const body = JSON.stringify({
        prompt,
        ...config.openai.configuration,
    });
    const model = config.openai.configuration.model;

    const startTime = performance.now();
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.openai.apiKey}`,
        },
        body,
    });
    const endTime = performance.now();

    const json = await response.json();

    if ( ! json.choices || json.choices.length === 0 ) {
        logResponse({
            prompt,
            response: JSON.stringify(json, null, 4),
            code: '',
            openai: {
                model,
                requestTime: endTime - startTime,
                tokens: {
                    prompt: 0,
                    response: 0,
                    total: 0,
                },
            },
        });
        return json;
    }

    const text = json.choices[0].text;
    const code = getCodeFromText(text);
    logResponse({
        prompt,
        response: text,
        code,
        openai: {
            model,
            requestTime: endTime - startTime,
            tokens: {
                prompt: json.usage.prompt_tokens || null,
                response: json.usage.completion_tokens || null,
                total: json.usage.total_tokens || null,
            },
        },
    });

    Cache.saveItemToCache(prompt, JSON.stringify(code));

    return code;
};

export const OpenAPI = {
    getResponse,
};
