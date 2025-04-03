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
                <div className="cards">
                    <Card image="https://m.media-amazon.com/images/I/81o7ySa-ebL._AC_UF1000,1000_QL80_.jpg" title="Livro do melhor do mundo" author="Caio Lacerda" price="R$ 120,00" rating={4} />
                    <Card image="https://images.tcdn.com.br/img/img_prod/311840/livro_santos_almanaque_fc_64934_1_20210806220307.jpg" title="Livro do Santos" author="Bernardo Marques" price="R$ 160,00" rating={4} />
                    <Card image="https://m.media-amazon.com/images/I/710HGTP2esL._AC_UF1000,1000_QL80_.jpg" title="Livro do MAIOR" author="Enzo Turcovic" price="R$ 1,00" rating={5} />
                </div>
            </div>
            <div className="titleSection">
                    <h1>Categorias Populares</h1>
                    <p className={styles.viewall}>Ver todos</p>
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
            <div className="section">
                <div className="titleSection">
                    <h1>Lançamentos</h1>
                    <p className={styles.viewall}>Ver todos</p>
                </div>
                <div className="cards">
                    <Card image="https://m.media-amazon.com/images/I/81s4Vp0dx6L._AC_UF1000,1000_QL80_.jpg" title="Livro do cr7" author="CR7" price="R$ 120,00" rating={5} />
                    <Card image="https://m.media-amazon.com/images/I/81NWjF14ABL._AC_UF1000,1000_QL80_.jpg" title="Livro Messi" author="Messi" price="R$ 160,00" rating={5} />
                    <Card image="https://cdn.awsli.com.br/600x450/1152/1152486/produto/240606930/catapulta-pb4hv8vfny.jpg" title="Livro do pelé" author="Pele" price="R$ 1,00" rating={0.1} />
                </div>
            </div>
            <Footer />
        </div>
    );
}