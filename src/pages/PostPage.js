import { useParams } from "react-router-dom";
import usePost from "../hooks/usePost";
import { Post } from "../components/Post";
import { ErrorMessage } from "../components/ErrorMessage";

export const PostPage = () => {
  const { id } = useParams();

  const { post, loading, error } = usePost(id);

  if (loading) return <p>Cargando publicación...</p>;
  if (error) return <ErrorMessage message={error} />;

    return (
      <section className="postlist">
          <h1>Publicación</h1>
          <Post post={post} />
      </section>
    )
  }