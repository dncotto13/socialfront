import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserPosts } from "../components/UserPosts";
import useUser from "../hooks/useUser";


export const UserPage = () => {
    const { id } = useParams();
    const { user, loading, error } = useUser(id);

    

    if(loading) return <p>Cargando datos de usuario...</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section>
            <h1>{user.email}</h1>
            <p>Se unió en {new Date(user.created_at).toLocaleString()}</p>
            <UserPosts id={user.id} />
        </section>
    );
};