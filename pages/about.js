import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p> Pokenext é um app construído em Next.js para consultar Pokémons</p>
            <p>Feito pelo <a href="https://github.com/kauecavalcante" target="_blank"><span className={styles.name}>Kauê Cavalcante</span></a> <br/>
                API usada <a className={styles.name} href="https://pokeapi.co/" target="_blank">pokeapi</a> <br/>
                projeto no <a className={styles.name} href="https://github.com/kauecavalcante/Pokenext" target="_blank">github</a>
            </p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    )
}