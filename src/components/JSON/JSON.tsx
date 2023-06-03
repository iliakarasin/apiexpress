import { prettyPrintJson } from '@/utils/colorizer';
import styles from './JSON.module.scss';

type JSONProps = {
    code?: string;
    headers?: Headers;
};

export const JSON = ({ code, headers }: JSONProps) => {
    if ( ! code ) return null;

    const parsed = window.JSON.parse(code);
    const colorizedCode = prettyPrintJson.toHtml(parsed);

    const cache = headers?.get('x-apie-cache');
    const model = headers?.get('x-apie-model');
    const timing = headers?.get('x-apie-timing');
    const tokenPrompt = headers?.get('x-apie-token-prompt');
    const tokenResponse = headers?.get('x-apie-token-response');
    const tokenTotal = headers?.get('x-apie-token-total');

    const formattedTiming = parseFloat(timing || '0').toFixed(2);

    const hasTokens = tokenPrompt || tokenResponse || tokenTotal;

    return (
        <div className={styles.json}>
            <h2>JSON Generated</h2>
            <div className={styles.meta}>
                <ul>
                    <li>
                        <strong>Served from cache:</strong> {cache === 'true' ? 'Yes' : 'No'}
                    </li>

                    {model && (
                        <li>
                            <strong>Model used:</strong> {model}
                        </li>
                    )}

                    {timing && (
                        <li>
                            <strong>AI Generation Time:</strong> {formattedTiming} ms
                        </li>
                    )}

                    {hasTokens && (
                        <li>
                            <strong>Tokens:</strong>
                            <ul>
                                {tokenPrompt && (
                                    <li>
                                        <strong>Prompt:</strong> {tokenPrompt}
                                    </li>
                                )}

                                {tokenResponse && (
                                    <li>
                                        <strong>Response:</strong> {tokenResponse}
                                    </li>
                                )}

                                {tokenTotal && (
                                    <li>
                                        <strong>Total Used:</strong> {tokenTotal}
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
            <code dangerouslySetInnerHTML={{ __html: colorizedCode}}></code>
        </div>
    )
};
