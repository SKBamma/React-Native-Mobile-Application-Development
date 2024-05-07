
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

import Author from './author';
import { GlobalContext } from '../../contex/context';

export default function Authorlist() {
    const navigate = useNavigate();
    const { authors } = useContext(GlobalContext);
    const [searchTitle, setSearchTitle] = useState('');
    const [displayAuthors, setDisplayAuthors] = useState(authors);

    useEffect(() => {
        setDisplayAuthors(authors);
    }, [authors]);
    const navigateToAddAuthor = () => {
        navigate("/add-author");
    };

    const handleOnchangae = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(e.target.value);
    };

    const handleSearchAuthors = () => {
        const array = authors.filter(author => author.firstname.toLowerCase().startsWith(searchTitle.trim().toLowerCase()));
        setDisplayAuthors(array);
    };
    return (
        <div>

            <h3>Author List</h3>

            <input placeholder='Search..' value={searchTitle} onChange={handleOnchangae} />

            <button type='button' onClick={handleSearchAuthors}>Search Authors</button>

            <ol style={{ padding: 5, margin: 5 }}>
                {
                    displayAuthors.map((author) => <Author key={nanoid()} data={author} />)
                }
            </ol>

            <button type='button'
                onClick={navigateToAddAuthor}>Add New Author</button>
        </div>
    );
}
