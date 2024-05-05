import React, { ChangeEvent, useContext, useState } from 'react';
import { IBOOK } from '../../types/types';
import axios from 'axios';
import { GlobalContex } from '../contex/contex';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
    const { books, setBooks } = useContext(GlobalContex);
    const navigate = useNavigate();
    const [addBook, setAddBook] = useState<IBOOK>({
        id: '', title: '', genre: '', isbn: '', format: '', summary: ''
    });

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddBook({ ...addBook, [name]: value });
    };
    const handleAddBook = async () => {
        try {
            const res = await axios.post('http://localhost:5000/books', addBook);
            if (res.status === 201) {
                setBooks([...books, res.data]);
            }
        } catch (error) {
            alert("Unable to add kook to db!");
        }
        navigate('/');
    };

    return (
        <div style={{
            marginLeft: "40%", width: 300, height: 400, border: 2,
            color: "black", background: 'green', textAlign: 'center'
        }}>
            <h3>Add New Book</h3>
            <input placeholder='Id' name='id' value={addBook.id}
                style={{ padding: 5, margin: 5, marginTop: 5 }} onChange={handleOnchange} />
            <br />
            <input placeholder='title' name='title' value={addBook.title}
                style={{ padding: 5, margin: 5, marginTop: 5 }} onChange={handleOnchange} />
            <br />
            <input placeholder='genre' name='genre' value={addBook.genre}
                style={{ padding: 5, margin: 5, marginTop: 5 }} onChange={handleOnchange} />
            <br />
            <input placeholder='isbn' name='isbn' value={addBook.isbn}
                style={{ padding: 5, margin: 5, marginTop: 5 }} onChange={handleOnchange} />
            <br />
            <input placeholder='format' name='format' value={addBook.format}
                style={{ padding: 5, margin: 5, marginTop: 5 }} onChange={handleOnchange} />
            <br />
            <input placeholder='summary' name='summary' value={addBook.summary}
                style={{ padding: 5, margin: 5, marginTop: 5 }} onChange={handleOnchange} />
            <br />
            <button type='button' onClick={handleAddBook}>Add Book</button>
        </div>
    );
}
