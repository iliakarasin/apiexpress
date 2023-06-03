import { prettyPrintJson } from '@/utils/colorizer';
import styles from './JSON.module.scss';

type JSONProps = {
    code?: string;
};

export const JSON = ({ code }: JSONProps) => {
    if ( ! code ) return null;

    const parsed = window.JSON.parse(code);
    const colorizedCode = prettyPrintJson.toHtml(parsed);
    console.log(colorizedCode);

    return (
        <div className={styles.json}>
            <h2>JSON Generated</h2>
            <code dangerouslySetInnerHTML={{ __html: colorizedCode}}></code>
        </div>
    )
};
