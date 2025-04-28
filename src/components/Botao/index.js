import styles from "./Botao.module.css"
import {Link} from "react-router-dom"

export default function Botao({ link, texto, tamanho}){
    return(
        <Link to={link} >
            <button className={`
                ${styles.botao}
                ${styles[tamanho]}`}>{texto}</button>
        </Link>
    )
}