import { useParams, Routes, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown"
import posts from "assets/json/posts.json";
import PostModelo from "components/PostModelo";
import "./Post.css";
import NotFound from "paginas/NotFound";
import PaginaPadrao from "components/PaginaPadrao";
import Recomendacao from "components/Recomendacao";

export default function Post() {
	const parametros = useParams();
	const post = posts.find((post) => {
		return post.id === Number(parametros.id);
	});

    if(!post){
        return <NotFound></NotFound>
    }

	return (
        <Routes>
            <Route path="*" element={
                <PaginaPadrao></PaginaPadrao>
                }>
                <Route index element={
                    <section className="postContainer">
                            <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}>
                                <div className="post-markdown-container">
                                    <ReactMarkdown>{post.texto}</ReactMarkdown>
                                </div>
                        </PostModelo>
                        <Recomendacao paginaId={parametros.id}/>

                    </section>
            }/>
                <Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
	);
}
