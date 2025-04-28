import { useNavigate} from "react-router-dom"
import styles from "./NotFound.module.css"
import Botao from "components/Botao"

export default function NotFound(){
    const navegar = useNavigate()

    return(
        <>
        <section className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Oops! Página não encontrada.</h1>
            <p className={styles.paragrafro}>Tem certeza de que era isso que estava procurando?</p>
            <p className={styles.paragrafro}>Aguarde alguns instantes e recarregue a página, ou retorne para a página inicial.</p>
            <div className={styles.botaoContainer}>
                <Botao link={'/'} texto='Início' tamanho={'lg'}></Botao>
            </div>
            <img
            className={styles.imagemCachorro}
            src={'/assets/erro_404.png'}
            alt="Cachorro de óculos vestido como humano"
            ></img>
        </section>
        <div className={styles.espacoEmBranco}></div>
        </>
    )
}