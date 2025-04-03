import styles from '../styles/Header.module.css';
import Navegation from './Navegation';

export default function Header(){
    return (
        <header className={styles.header}> 
            <div className={styles.logo}>
                <h1>📚Books and funny</h1>
                <p>Onde ler é a maior diversão</p>
            </div>
            <Navegation />
            <input className={styles.input} type="text" placeholder='Buscar livros, autores...' />
            <img src="" alt="" />
        </header>
    );
};