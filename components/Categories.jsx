import styles from '../styles/Categories.module.css';

const Categories = () => {
    return (
        <div className={styles.categories}>
            <h1 className={styles.title}>Categorias</h1>
            <ul className={styles.list}>
                <li className={styles.item}>Aventura</li>
                <li className={styles.item}>Romance</li>
            </ul>
        </div>
    );
}