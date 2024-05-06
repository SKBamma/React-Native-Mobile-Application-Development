import { ChangeEvent, useContext, useState } from "react";
import { IBook } from "../../types/types";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contex/context";
import axios from "axios";

export function UpdateBook() {
    const location = useLocation();
    const navigate = useNavigate();
    const [updatebook, setUpdatebook] = useState<IBook>(location.state);

    const { books, setBooks } = useContext(GlobalContext);


    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatebook({ ...updatebook, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/books/${updatebook.id}`, updatebook);
            if (res.status === 200) {
                const index = books.findIndex((book) => book.id === updatebook.id);
                if (index !== -1) {
                    books[index] = res.data;
                }
                setBooks([...books]);
            }
        } catch (error) {
            alert("Unable to update!!");
        }
        navigate('/');
    };

    return (
        <div>
            <h2>Update Book</h2>
            <input placeholder="Id.." name="id" value={updatebook.id} onChange={handleOnchange} disabled />
            <br />
            <input placeholder="title.." name="title" value={updatebook.title} onChange={handleOnchange} />
            <br />
            <input placeholder="genre.." name="genre" value={updatebook.genre} onChange={handleOnchange} />
            <br />
            <input placeholder="isbn.." name="isbn" value={updatebook.isbn} onChange={handleOnchange} />
            <br />
            <input placeholder="summary.." name="summary" value={updatebook.summary} onChange={handleOnchange} />
            <br />
            <button type="button" onClick={handleUpdate}>Update</button>

        </div>
    );
}