import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import styles from '../../styles/Home.module.css';
import Footer from '../../components/Footer';
import CardCategorie from '../../components/CardCategorie';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.painel}>
                <h1>Descubra incriveis mundos</h1>
                <p>Promoção de outono com até 30% de desconto!</p>
                <button>Ver ofertas</button>
            </div>
            <div className={styles.section}>
                <div className={styles.titleSection}>
                    <h1>Destaque da semana</h1>
                    <p>Ver todos</p>
                </div>
                <div className={styles.cards}>
                    <Card image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Livro de Programação" author="Caio Lacerda" price="R$ 100,00" rating={4.5} />
                    <Card image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Livro de Programação" author="Caio Lacerda" price="R$ 100,00" rating={4.5} />
                    <Card image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Livro de Programação" author="Caio Lacerda" price="R$ 100,00" rating={4.5} />
                </div>
            </div>

            <section className={styles.categorias}>
                <CardCategorie
                    emoji="🚀"
                    categoria="Ficção científica"
                />
                <CardCategorie
                    emoji="💘"
                    categoria="Romance"
                />
                <CardCategorie
                    emoji="👤"
                    categoria="Biografia"
                />
                <CardCategorie
                    emoji="💻"
                    categoria="Tecnologia"
                />
                <CardCategorie
                    emoji="🔮"
                    categoria="Fantasia"
                />
                <CardCategorie
                    emoji="📜"
                    categoria="História"
                />
                <CardCategorie
                    emoji="🌱"
                    categoria="Autoajuda"
                />
            </section>
            <Footer />
        </div>
    )
}