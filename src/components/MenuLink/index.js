import { Link, NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink({children, pagina, destino}){
    return(
        <NavLink className={({ isActive }) => isActive ? `
            ${styles.link}
            ${styles.linkDestacado}
            ` : ''} to={destino}>{ children }</NavLink>
    )
}