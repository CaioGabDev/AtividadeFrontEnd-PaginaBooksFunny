import styles from '../styles/Navegation.module.css';

export default function Navegation() {
    return (
        <div className={styles.navegation}>
        <nav>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Authors</li>
                <li>Genres</li>
            </ul>
        </nav>
        </div>
    );
}