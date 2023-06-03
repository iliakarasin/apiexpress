import styles from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src="/assets/loader.svg" alt="Loading..." />
            <h4>Generating JSON</h4>
            <p>This may take a few moments...</p>
        </div>
    );
};
