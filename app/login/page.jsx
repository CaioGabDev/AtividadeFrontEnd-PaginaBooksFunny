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
                    <p className="viewall">Ver todos</p>
                </div>
                <div className="cards">
                    <Card image="https://m.media-amazon.com/images/I/81o7ySa-ebL._AC_UF1000,1000_QL80_.jpg" title="Livro do melhor do mundo" author="Caio Lacerda" price="R$ 120,00" rating={4} />
                    <Card image="https://images.tcdn.com.br/img/img_prod/311840/livro_santos_almanaque_fc_64934_1_20210806220307.jpg" title="Livro do Santos" author="Bernardo Marques" price="R$ 160,00" rating={4} />
                    <Card image="https://m.media-amazon.com/images/I/710HGTP2esL._AC_UF1000,1000_QL80_.jpg" title="Livro do MAIOR" author="Enzo Turcovic" price="R$ 177,00" rating={5} />
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

            <div className="newsletter">
                <h1 className="news">Fique por dentro das novidades!</h1>
                <p className="info">Receba ofertas e novidades em primeira mão!</p>
                <div className="inputnews">
                    <input className=" emailnews" type="text" placeholder="Digite seu e-mail" />
                    <button className="assinar">Assinar</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}