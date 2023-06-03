import styles from './Hero.module.scss';

type HeroProps = {
    heading: string,
    subheading: string,
};

export const Hero = ({ heading, subheading }: HeroProps) => {
    return (
        <div className={styles.hero}>
            <img src="/assets/logo.png" alt="APIExpress" />
            <p>{subheading}</p>
        </div>
    );
};
