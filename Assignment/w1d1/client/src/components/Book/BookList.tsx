import React, { ChangeEvent, useContext, useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

import { GlobalContex } from '../contex/contex';
import Book from './book';
import axios from 'axios';


export default function BookList() {
    const { books } = useContext(GlobalContex);
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = useState('');

    const [displayBooks, setDispalyBooks] = useState(books);
    useEffect(() => {
        setDispalyBooks(books);
    }, [books]);
    const navigateToAddBook = () => {
        navigate('/add-book');
    };

    const handleSearchonChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(e.target.value);
    };
    const handleSearch = async () => {
        try {
            const array = books.filter((book) => book.title.toLocaleLowerCase().startsWith(searchTitle.trim().toLocaleLowerCase()));
            if (array) {
                setDispalyBooks(array);
            }
        } catch (error) {
            console.log("Unable to search book by title!!");
        }
    };
    return (
        <div style={{ marginLeft: "35%" }}>
            <h3 style={{ marginLeft: "20%" }}>Book List</h3>

            <input placeholder='Search title ...' name='search' value={searchTitle}
                style={{ marginLeft: "25%", margin: 50 }}
                onChange={handleSearchonChange} />

            <button type='button' onClick={handleSearch}>Search</button>
            <ol>
                {
                    displayBooks.map((book) => <Book key={nanoid()} data={book} />)
                }
            </ol>
            <button type='button' className="btn btn-primary"
                style={{ marginLeft: "20%", marginBottom: 20 }}
                onClick={navigateToAddBook}>Add New Book</button>
        </div>
    );
}
