let logType = 'file';

export const config = {
    logType: {
        getLogType: () => logType,
        setLogType: (type: string) => logType = type,
    },
    paths: {
        storage: './storage',
        cache: './storage/cache',
        logs: './storage/logs',
        requests: './storage/logs/request',
    },
    openai: {
        apiKey: process.env.OPENAI_API_KEY,
        configuration: {
            model: 'text-davinci-003',
            temperature: 1,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: false,
        },
    },
};
