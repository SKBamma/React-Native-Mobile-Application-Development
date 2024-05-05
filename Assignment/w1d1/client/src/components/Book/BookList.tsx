import React, { useContext } from 'react';

import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

import { GlobalContex } from '../contex/contex';
import Book from './book';


export default function BookList() {
    const { books } = useContext(GlobalContex);
    const navigate = useNavigate();

    const navigateToAddBook = () => {
        navigate('/add-book');
    };
    return (
        <div style={{ marginLeft: "35%" }}>
            <h3 style={{ marginLeft: "20%" }}>Book List</h3>
            <ol>
                {
                    books.map((book) => <Book key={nanoid()} data={book} />)
                }
            </ol>
            <button type='button' className="btn btn-primary"
                style={{ marginLeft: "20%", marginBottom: 20 }}
                onClick={navigateToAddBook}>Add New Book</button>
        </div>
    );
}
