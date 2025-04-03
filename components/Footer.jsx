import styles from '../styles/Footer.module.css';
import Categories from './Categories';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.headerRow}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>BooksFunny📚</h1>
                    <p className={styles.subtitle}>O melhor lugar para encontrar sua próxima história!</p>
                </div>
                <Categories title={"Links Rápidos"} item1={"Home"} item2={"Catálogo"} item3={"Ofertas"} item4={"Sobre Nós"} item5={"Contato"}/>
                <Categories title={"Categorias"} item1={"Ficção Científica"} item2={"Romance"} item3={"Tecnologia"} item4={"Fantasia"} item5={"História"}/>
                <Categories title={"Redes Sociais"} item1={"📷 Instagram"} item2={"🎵 TikTok"} item3={"🐦 Twitter"} item4={"🎬 YouTube"} />
            </div>
            
            <div className={styles.license}>
                <p className={styles.copyright}>2025 BooksFunny. Todos os direitos reservados</p>
                <p className={styles.terms}>Termos de uso | Política de privacidade</p>
            </div>
        </footer>
    );
}

export default Footer;