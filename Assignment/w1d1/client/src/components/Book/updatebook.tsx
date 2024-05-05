import React, { ChangeEvent, useContext, useState } from 'react';
import { IBOOK } from '../../types/types';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContex } from '../contex/contex';
import axios from 'axios';

export default function Updatebook() {
    const location = useLocation();
    const navigate = useNavigate();
    const { books, setBooks } = useContext(GlobalContex);
    const [updateBook, setUpdateBook] = useState<IBOOK>(location.state);

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdateBook({ ...updateBook, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/books/${updateBook.id}`, updateBook);
            if (res.status === 200) {
                const index = books.findIndex(book => book.id === updateBook.id);
                if (index !== -1) {
                    books[index] = res.data;
                }
                setBooks([...books]);
            }
        } catch (error) {
            console.log("Unable to update book!");
        }
        navigate('/');
    };

    return (
        <div>
            <h3>Update Book</h3>
            <input placeholder='Id..' name='id' value={updateBook.id} onChange={handleOnchange} disabled />
            <br />
            <input placeholder='title..' name='title' value={updateBook.title} onChange={handleOnchange} />
            <br />
            <input placeholder='genre..' name='genre' value={updateBook.genre} onChange={handleOnchange} />
            <br />
            <input placeholder='isbn..' name='isbn' value={updateBook.isbn} onChange={handleOnchange} />
            <br />
            <input placeholder='format..' name='format' value={updateBook.format} onChange={handleOnchange} />
            <br />
            <input placeholder='summary..' name='summary' value={updateBook.summary} onChange={handleOnchange} />
            <br />
            <button type='button' onClick={handleUpdate}>Update</button>
        </div>
    );
}
