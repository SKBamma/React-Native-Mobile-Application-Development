import React, { useContext } from 'react';
import { GlobalContext } from './context';

export default function BookList() {
    const { books } = useContext(GlobalContext);
    return (
        <div style={{ marginLeft: '20%' }}>
            <h3>BookList</h3>
            <ol>
                {books.map((book) => (
                    <li key={book.id} style={{
                        border: 1, borderStyle: 'solid', borderColor: 'black', margin: 5,
                        textAlign: 'center', marginRight: 150, background: 'whitesmoke'
                    }}>
                        <p>Title: {book.title}</p>
                        <p>Genre: {book.genre}</p>
                        <p>Summary: {book.summary}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
