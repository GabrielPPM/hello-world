import PostCard from 'components/PostCard'
import styles from './Recomendacao.module.css'
import posts from "assets/json/posts.json"
import { useParams } from "react-router-dom"

export default function Recomendacao({paginaId}) {

    const recomendacoes = posts.filter((post) => {
        return post.id != paginaId;
    })

    console.log(recomendacoes)

    return(
        <section className={styles.recomendacoesContainer}>
            <h2 className={styles.titulo}>Recomendações: </h2>
            <ul className={styles.recomendacao}>
                {
                    recomendacoes.map((recomendacao, index) => {
                        if(index < 4){
                            return <li>
                                <PostCard post={recomendacao}></PostCard>
                            </li>
                        }
                    })
                }
            </ul>
        </section>
    )
}