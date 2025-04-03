import styles from "../styles/CardCategorie.module.css";

export default function CardCategoria({ emoji, categoria }) {
    return (
            <div className={styles.card}>
                <p className={styles.emojii} style={styles.emoji}> {emoji} </p>
                <p className={styles.categoriaa} style={styles.categoria}> {categoria} </p>
            </div>
    );
}
