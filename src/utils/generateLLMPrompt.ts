import { LLMPromptRequest } from '../types/LLMPromptRequest';

export const generateLLMPrompt = (request: LLMPromptRequest) => {
    let prompt = 'Generate a JSON response for the following endpoint "api/persons"\n';

    if ( request.count ) {
        prompt += `There should be ${request.count} items in the JSON response.\n`;
    }

    if ( request.schema ) {
        prompt += `The JSON response should match the following schema:\n${request.schema}\n`;
    }

    prompt += `${request.prompt}\n`;
    prompt += `\nAI:`;

    return prompt;
};
