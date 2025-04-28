import styles from './Banner.module.css'

export default function Banner(){
    return(
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Gabriel Machado, desenvolvedor Front-end Bosch. Aqui compartilho vários conhecimentos e espero que você possa aprender algo novo!
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                className={styles.circuloColorido}
                src='/assets/circulo_colorido.png'
                aria-hidden={true}
                alt='circulo colorido'
                />
                <img 
                className={styles.minhaFoto}
                src='/assets/foto.png'
                alt='minha foto'
                />
            </div>
        </section>
    )
}