import Banner from "components/Banner";
import styles from "./Inicio.module.css"
import posts from "assets/json/posts.json"
import Post from "components/PostCard";

export default function Inicio(){
    return(
        <ul className={styles.posts}>
            {posts.map((post) => {
                return <li key={post.id}><Post post={post}/></li>
            })}
        </ul>
    )
}