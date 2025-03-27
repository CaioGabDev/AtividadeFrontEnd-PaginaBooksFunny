import styles from '../styles/Card.module.css';

const Card = ({ title, text, image }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h2>{title}</h2>
            </div>
            <div className={styles.cardText}>
                <p>{text}</p>
            </div>
            {image}
        </div>
    );
};