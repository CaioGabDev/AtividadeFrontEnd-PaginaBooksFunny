import styles from '../styles/Categories.module.css';

export default function Categories({ title, item1, item2, item3, item4, item5 }) {
    return (
        <div className={styles.categories}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.list}>
                <li className={styles.item}>{item1}</li>
                <li className={styles.item}>{item2}</li>
                <li className={styles.item}>{item3}</li>
                <li className={styles.item}>{item4}</li>
                <li className={styles.item}>{item5}</li>
            </ul>
        </div>
    );
}