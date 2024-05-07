import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contex/context';
import Book from './book';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../types/types';


export default function Booklist() {
    const { books } = useContext(GlobalContext);

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');
    const [displaybooks, setDisplayBooks] = useState<IBook[]>(books);

    useEffect(() => {
        setDisplayBooks(books);
    }, [books]);

    const navigateToAddBook = () => {
        navigate("/add-book");
    };

    const handleSearchOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        try {
            const array = books.filter(book => book.title.toLowerCase().startsWith(searchText.trim().toLowerCase()));
            if (array) {

                setDisplayBooks(array);
            }
        } catch (error) {
            alert('Unable to find books!!');
        }
    };
    return (
        <div >
            <h4 style={{ marginLeft: "40%", padding: '10px', color: 'red' }}>Available Book list</h4>
            <div style={{ marginLeft: "40%" }}>

                <input type='string' placeholder='Search..' value={searchText} onChange={handleSearchOnchange} />

                <button type='button' onClick={handleSearch}>Search</button>
            </div>

            <ol>
                {
                    displaybooks.map((book) => <Book key={nanoid()} data={book} />)
                }
            </ol>
            <button type='button' style={{ marginLeft: "40%", padding: 8 }}
                onClick={navigateToAddBook}>Add New Book</button>

        </div>
    );
}
