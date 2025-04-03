import React from 'react';
import styles from '../login/login.css';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import CardCategorie from '../../components/CardCategorie';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <div className="painel">
                <h1>Descubra incriveis mundos</h1>
                <p>Promoção de outono com até 30% de desconto!</p>
                <button>Ver ofertas</button>
            </div>
            <div className="section">
                <div className="titleSection">
                    <h1>Destaque da semana</h1>
                    <p className={styles.viewall}>Ver todos</p>
                </div>
<<<<<<< Updated upstream
                <div className="cards">
                    <Card image="https://m.media-amazon.com/images/I/81o7ySa-ebL._AC_UF1000,1000_QL80_.jpg" title="Livro do melhor do mundo" author="Neymar Junior" price="R$ 120,00" rating={5} />
                    <Card image="https://images.tcdn.com.br/img/img_prod/311840/livro_santos_almanaque_fc_64934_1_20210806220307.jpg" title="Livro do Santos" author="Santos FC" price="R$ 160,00" rating={5} />
                    <Card image="https://m.media-amazon.com/images/I/710HGTP2esL._AC_UF1000,1000_QL80_.jpg" title="Livro do lixo" author="Enzo Turcovic" price="R$ 1,00" rating={0.1} />
=======
                <div className={styles.cards}>
                    <Card image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Livro de Programação" author="Caio Lacerda" price="R$ 100,00" rating={4.5} />
                    <Card image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Livro de Programação" author="Bernanrdo Marques" price="R$ 100,00" rating={4.5} />
                    <Card image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Livro de Programação" author="Enzo Turcovic" price="R$ 100,00" rating={4.5} />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                </div>
            </div>

            <section className="categorias">
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