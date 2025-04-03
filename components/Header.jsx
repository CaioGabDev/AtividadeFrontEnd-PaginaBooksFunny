import styles from '../styles/Header.module.css';
import Navegation from './Navegation';
import SectionMoji from './SectionMoji';

export default function Header(){
    return (
        <header className={styles.header}> 
            <div className={styles.logo}>
                <h1>📚BooksFunny</h1>
            </div>
            <Navegation />
            <input className={styles.input} type="text" placeholder='Buscar livros, autores...        🔎' />
            <SectionMoji />
        </header>
    );
};