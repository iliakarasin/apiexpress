import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useCallback, useMemo, useRef, useState } from 'react';
import style from './Prompt.module.scss';
import { sampleData } from '@/constants/sampleData';
import { HelpText } from '../HelpText/HelpText';

export type PromptValues = {
    url: string;
    prompt: string;
    schema: string;
    count: number;
};

type PromptProps = {
    onPromptSubmission: (values: PromptValues) => void;
    userCanGenerate: boolean;
};

export const Prompt = ({ onPromptSubmission, userCanGenerate }: PromptProps) => {
    const [schemaError, setSchemaError] = useState<string>('');

    const formRef = useRef<HTMLFormElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);
    const promptRef = useRef<HTMLTextAreaElement>(null);
    const schemaRef = useRef<HTMLTextAreaElement>(null);
    const countRef = useRef<HTMLInputElement>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(event => {
        event.preventDefault();
        event.stopPropagation();

        if ( ! formRef.current ) return;

        const formData = new FormData(formRef.current);
        const url = formData.get('url') || '';
        const prompt = formData.get('prompt') || '';
        const schema = formData.get('schema') || '';
        const count = formData.get('count');

        const values: PromptValues = {
            url: url as string,
            prompt: prompt as string,
            schema: schema as string,
            count: parseInt(count as string),
        };
        onPromptSubmission(values);
    }, [formRef]);

    const setSampleData = useCallback(() => {
        if ( urlRef.current ) urlRef.current.value = sampleData.url;
        if ( promptRef.current ) promptRef.current.value = sampleData.prompt;
        if ( schemaRef.current ) schemaRef.current.value = sampleData.schema;
        if ( countRef.current ) countRef.current.value = sampleData.count.toString();
    }, [
        formRef,
        urlRef,
        promptRef,
        schemaRef,
        countRef,
    ]);

    const formIsValid = useMemo(() => {
        if ( schemaError ) return false;

        return true;
    }, [
        schemaError
    ]);

    const validateSchema: ChangeEventHandler<HTMLTextAreaElement> = event => {
        if ( ! event.target ) return;
        const value = event.target.value;

        try {
            JSON.parse(value);
            setSchemaError('');
        } catch {
            setSchemaError('JSON is invalid');
        }
    };

    return (
        <form className={style.prompt} ref={formRef} onSubmit={handleSubmit}>
            <h2>Inputs</h2>
            <div className={style['field-group']}>
                <label>
                    URL
                    <HelpText text="The endpoint to mock.\nFor example: /api/persons" />
                </label>
                <input type="text" name="url" ref={urlRef} required />
            </div>
            <div className={style['field-group']}>
                <label>
                    Prompt
                    <HelpText text="A simple sentence to guide the content generation.\nFor example: 'Provide a list of users with last name of May'" />
                </label>
                <textarea name="prompt" rows={1} ref={promptRef} required></textarea>
            </div>
            <div className={style['field-group']}>
                <label>
                    Schema
                    <HelpText text="A JSON schema that helps guide the generated API content" />
                </label>
                <textarea name="schema" rows={10} ref={schemaRef} onBlur={validateSchema} required></textarea>
                {schemaError && <span className="error">{schemaError}</span>}
            </div>
            <div className={style['field-group']}>
                <label>
                    Count
                    <HelpText text="The number of results you wish to be returned in the JSON response" />
                </label>
                <input name="count" type="number" ref={countRef} required />
            </div>
            <div className={style['field-group']}>
                <div className="button-group">
                    <button
                        type="submit"
                        disabled={!formIsValid || !userCanGenerate}
                    >
                        Generate
                    </button>
                    <button className="secondary" type="button" onClick={setSampleData}>Use Sample</button>
                </div>
            </div>
        </form>
    );
};
