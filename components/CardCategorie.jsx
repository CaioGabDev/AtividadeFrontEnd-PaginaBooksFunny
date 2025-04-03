import styles from '../styles/CardCategorie.module.css';

export default function CardCategorie({ emoji, title}) {
    return (
        <div className={styles.cardCategoria}>
            <p className={styles.emoji}>{emoji}</p>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}