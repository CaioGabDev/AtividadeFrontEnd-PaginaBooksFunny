import styles from '../styles/Card.module.css';

export default function Card ({ title, text }){
    return (
        <div className ={styles.cardTotal}>
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h2>{title}</h2>
            </div>
            <div className={styles.cardText}>
                <p>{text}</p>
            </div>
        </div>
        </div>
    );
};