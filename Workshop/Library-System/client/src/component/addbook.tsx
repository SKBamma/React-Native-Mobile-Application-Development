import React, { ChangeEvent, useContext, useState } from 'react';
import { Book } from '../types/types';
import { postBook } from '../apis/services/book.author.services';
import { GlobalContext } from './context';

export default function Addbook() {
    const [book, setBook] = useState<Book>(
        { id: '', title: '', genre: '', isbn: '', format: 'paper', summary: '', authors: [] });

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };
    const { books, setBooks } = useContext(GlobalContext);
    const HnadleAddBook = async () => {
        try {
            const res = await postBook(book);
            if (res.status === 201) {
                setBooks([...books, res.data]);
            }
        } catch (error) {
            console.log("Error adding books to db!!");
        }

    };
    return (
        <div style={{ marginLeft: "40%" }}>
            <h3>Add Book </h3>
            <input placeholder='Id' value={book.id} name='id' onChange={handleOnchange}
                style={{ padding: 5, margin: 3, background: 'lightcoral' }} />
            <br />
            <input placeholder='Title' value={book.title} name='title' onChange={handleOnchange}
                style={{ padding: 5, margin: 3, background: 'lightcoral' }} />
            <br />
            <input placeholder='Genre' value={book.genre} name='genre' onChange={handleOnchange}
                style={{ padding: 5, margin: 3, background: 'lightcoral' }} />
            <br />
            <input placeholder='ISBN' value={book.isbn} name='isbn' onChange={handleOnchange}
                style={{ padding: 5, margin: 3, background: 'lightcoral' }} />
            <br />
            <input placeholder='Format' value={book.format} name='format' onChange={handleOnchange}
                style={{ padding: 5, margin: 3, background: 'lightcoral' }} />
            <br />
            <input placeholder='Summary' value={book.summary} name='summary' onChange={handleOnchange}
                style={{ padding: 5, margin: 3, background: 'lightcoral' }} />
            <br />
            <button type='button' onClick={HnadleAddBook}
                style={{ padding: 5, margin: 3, background: 'green', marginLeft: 45 }}>Add Book</button>

        </div>
    );
}
