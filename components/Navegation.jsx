import styles from '../styles/Navegation.module.css';

export default function Navegation() {
    return (
        <div className={styles.navegation}>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Livros</li>
                <li>Categorias</li>
                <li>Autores</li>
                <li>Ofertas</li>
            </ul>
        </nav>
        </div>
    );
}