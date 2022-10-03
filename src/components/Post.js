import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deletePostService } from "../services";

export const Post = ({ post, removePost }) => {
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deletePost = async (id) => {
    try {
      await deletePostService({ id, token });

      if (removePost) {
        removePost(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      {post.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
          alt={post.text}
        />
      ) : null}

      <p>{post.text}</p>

      <p>
        By <Link to={`/user/${post.user_id}`}>{post.email}</Link> on{" "}
        <Link to={`/post/${post.id}`}>
          {new Date(post.created_at).toLocaleString()}
        </Link>
      </p>

      {user && user.id === post.user_id ? (
        <section>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "¿Estás seguro que quiere eliminar la publicación?"
                )
              )
                deletePost(post.id);
            }}
          >
            Eliminar publicación
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
