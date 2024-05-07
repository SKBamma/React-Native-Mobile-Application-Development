import { ChangeEvent, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IAuthor } from "../../types/types";
import axios from "axios";
import { GlobalContext } from "../../contex/context";

export function UpdateAuthor() {
    const location = useLocation();
    const navigate = useNavigate();
    const [updateAuthor, setUpdateAuthor] = useState<IAuthor>(location.state);
    const { authors, setAuthors } = useContext(GlobalContext);
    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdateAuthor({ ...updateAuthor, [name]: value });
    };
    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/authors/${updateAuthor.id}`, updateAuthor);
            if (res.status === 200) {
                const index = authors.findIndex((author) => author.id === updateAuthor.id);
                if (index !== -1) {
                    authors[index] = res.data;
                }
                setAuthors([...authors]);
            }
        } catch (error) {
            console.log('unable to update author..');
        }
        navigate('/authorlist');
    };
    return (
        <div>

            <h5>Update Author</h5>
            <input placeholder="id" name="id" value={updateAuthor.id}
                onChange={handleOnchange} disabled />
            <br />
            <input placeholder="firstname" name="firstname" value={updateAuthor.firstname}
                onChange={handleOnchange} />
            <br />
            <input placeholder="lastname" name="lastname" value={updateAuthor.lastname}
                onChange={handleOnchange} />
            <br />
            <input placeholder="phone" name="phone" value={updateAuthor.phone}
                onChange={handleOnchange} />
            <br />
            <input placeholder="email" name="email" value={updateAuthor.email}
                onChange={handleOnchange} />
            <br />
            <input placeholder="address" name="address" value={updateAuthor.address}
                onChange={handleOnchange} />
            <br />
            <button type="button" onClick={handleUpdate}>Update</button>
        </div>
    );
}