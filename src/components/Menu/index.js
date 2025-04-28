import styles from './Menu.module.css'
import MenuLink from 'components/MenuLink'

export default function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink 
                pagina={'/'}
                destino={'/'}>
                    Início
                </MenuLink>
                <MenuLink 
                pagina={'/sobre-mim'}
                destino={'/sobre-mim'}>
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}