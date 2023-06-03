import styles from './Hero.module.scss';

type HeroProps = {
    heading: string,
    subheading: string,
};

export const Hero = ({ heading, subheading }: HeroProps) => {
    return (
        <div className={styles.hero}>
            <h1>{heading}</h1>
            <p>{subheading}</p>
        </div>
    );
};