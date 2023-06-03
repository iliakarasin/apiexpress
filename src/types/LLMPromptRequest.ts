export type LLMPromptRequest = {
    path: string;
    prompt: string;
    schema?: string;
    count?: number | string;
};