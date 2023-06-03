import styles from './JSON.module.scss';

type JSONProps = {
    code?: string;
};

export const JSON = ({ code }: JSONProps) => {
    if ( ! code ) return null;
    return (
        <div className={styles.json}>
            <h2>JSON Generated</h2>
            <code>{code}</code>
        </div>
    )
};
