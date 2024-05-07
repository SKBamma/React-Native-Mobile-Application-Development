import React, { ChangeEvent, useContext, useState } from 'react';
import { IBook } from '../../types/types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contex/context';

export default function Addbook() {
    const [book, setBook] = useState<IBook>({
        id: '', title: '', genre: '', isbn: '', format: 'paper', summary: '', authors: []
    });
    const navigate = useNavigate();
    const { books, setBooks } = useContext(GlobalContext);

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };
    const handleAddBook = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/books`, book);
            if (res.status === 201) {
                alert("Book added successfully!");
                setBooks([...books, res.data]);
            }
        } catch (error) {
            console.log("Unable to add book!!");
        }
        navigate('/boolist');
    };

    return (
        <div>

            <input placeholder='Id..' name='id' value={book.id} onChange={handleOnchange} />
            <br />
            <input placeholder='title..' name='title' value={book.title} onChange={handleOnchange} />
            <br />
            <input placeholder='genre..' name='genre' value={book.genre} onChange={handleOnchange} />
            <br />
            <input placeholder='isbn..' name='isbn' value={book.isbn} onChange={handleOnchange} />
            <br />
            <input placeholder='summary..' name='summary' value={book.summary} onChange={handleOnchange} />
            <br />
            <button type='button' onClick={handleAddBook}>Add book</button>
        </div>
    );
}
