import {Link} from 'react-router-dom'
import styles from './PostCard.module.css'
import Botao from 'components/Botao'

export default function PostCard({post}){
    return(
        <div className={styles.post}>
                <img className={styles.capa}
                src={
                    `/assets/posts/${post.id}/capa.png`
                }
                alt='Imagem de capa do post' />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                    <Botao link={`/posts/${post.id}`} texto='Ler'></Botao>
            </div>
    )
}