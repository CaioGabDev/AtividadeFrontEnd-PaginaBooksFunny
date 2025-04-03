import styles from "../styles/Card.module.css";

export default function Card({ image, title, author, price, rating}) {
    return (
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>por {author}</p>
        <div className={styles.rating}>⭐ {rating}</div>
        <div className={styles.tags}>
        </div>
        <div className={styles["prices"]}>
          <p className={styles.price}>{price}</p>
          <div className={styles.icons}>
            <button>🛒</button>
            <button>❤️</button>
          </div>
        </div>
      </div>
    );
}