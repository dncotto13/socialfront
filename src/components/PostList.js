import { Post } from "./Post";

export const PostList = ({ posts, removePost }) => {
    return posts.length ? (
        <ul>
            {posts.map((post) => (
                <li key = {post.id}>
                    <Post post = {post} removePost={removePost} />
                </li>
            ))}
        </ul>
    ) : (
        <p>Todavía no hay ninguna publicación</p>
    );
};
