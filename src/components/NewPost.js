import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendPostService } from "../services";

export const NewPost = ({addPost}) => {
    const [error, setError] = useState("");
    const [sending, setSending] = useState(false);
    const { token } = useContext(AuthContext);
    const [image, setImage] = useState(null);

    const handleform = async (e) => {
        e.preventDefault();

        try {
            setSending(true);

        const data = new FormData(e.target);
        const post = await sendPostService({data, token});

        addPost(post);
        e.target.reset();
        setImage(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setSending(false);
        }
    };

    return ( 
        
    <form onSubmit={handleform}>
        <h1>Nueva publicación</h1>

        <fieldset>
            <label htmlFor="image">Subir imagen</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files(0))}required/>
            {image ? <figure>
                <img src={URL.createObjectURL(image)} alt="Preview" style={{width: '100px'}} />
            </figure> : null}
        </fieldset>

        <fieldset>
            <label htmlFor="text">Escribe un texto...</label>
            <input type="text" id="text" name="text"/>
        </fieldset>

        <button>Publicar</button>
        {sending ? <p>Publicando...</p> : null}
        {error ? <p>{error}</p> : null}
    </form>
    );
};