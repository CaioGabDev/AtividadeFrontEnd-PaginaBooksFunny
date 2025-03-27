import styles from '../styles/Header.module.css';


export default function Header(){
    return (
        <header className={styles.header}> 
            <div className={styles.logo}>
                <h1>📚Books and funny</h1>
                <p>Onde ler é a maior diversão</p>
            </div>
            <div className={styles.navegation}>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Authors</li>
                <li>Genres</li>
            </ul>
            </div>
            <input className={styles.input} type="text" placeholder='Buscar livros, autores...' />
        </header>
    );
};