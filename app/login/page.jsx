import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import styles from '../../styles/Home.module.css'; 
import Footer from '../../components/Footer'; 

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.painel}>
                <h1>Descubra incriveis mundos</h1>
                <p>Promoção de outono com até 30% de desconto!</p>
                <button>Ver ofertas</button>
            </div>
            <Footer />
        </div>
    )
}