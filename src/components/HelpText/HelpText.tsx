import styles from './HelpText.module.scss';

type HelpTextProps = {
    text: string;
};

export const HelpText = ({ text }: HelpTextProps) => {
    const displayedText = text.replace(/\\n/g, '\n');

    return (
        <div className={styles.help}>
            <img src="/assets/help.svg" alt="Help" className={styles.tooltip} />
            <span>{displayedText}</span>
        </div>
    );
};
