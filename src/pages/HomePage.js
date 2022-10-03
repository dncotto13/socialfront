import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewPost } from "../components/NewPost";
import { PostList } from "../components/PostList";
import { AuthContext } from "../context/AuthContext";
import usePosts from "../hooks/usePosts";

export const HomePage = () => {
    const { posts, loading, error, addPost, removePost } = usePosts();
    const { user } = useContext(AuthContext);

    if (loading) return <p>Cargando publicaciones...</p>;
    if (error) return <ErrorMessage message = {error} />;

  return (
    <section>
      {user ? <NewPost addPost={addPost}/> : null}
        <h1 className="postend">Últimas publicaciones</h1>

    <div className="postlist">
        <PostList posts = {posts} removePost={removePost}/>
    </div>
    </section>
  );
};
