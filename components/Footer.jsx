import styles from '.Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.title}>BooksFunny📚</h1>
            <p className={styles.subtitle}>O melhor lugar para encontrar sua próxima história!</p>
            <p className={styles.copyright}>2025 BooksFunny. Todos os direitos reservados</p>
            <p className={styles.license}>Termos de uso | Política de privacidade</p>
        </footer>
    );
}

export default Footer;