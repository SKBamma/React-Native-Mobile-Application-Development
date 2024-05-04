import React, { useContext } from 'react';
import { GlobalContext } from './context';
import { useNavigate } from 'react-router-dom';
import Boook from './book';

export default function BookList() {
    const { books } = useContext(GlobalContext);
    const navigate = useNavigate();

    const navigateToAdddBook = () => {
        navigate('/add-book');
    };
    const navigateToAutherlist = () => {
        navigate('/author-list');
    };
    return (
        <div style={{ marginLeft: '20%' }}>
            <h3>BookList</h3>
            <ol>
                {books.map((book) => <Boook key={book.id} data={book} />)}
            </ol>
            <button type='button' style={{ marginLeft: "18%", padding: 10, }}
                className="btn btn-primary"
                onClick={navigateToAdddBook}>Add Book</button>
            <button type='button' style={{ marginLeft: "38%", padding: 10 }}
                className="btn btn-primary"
                onClick={navigateToAutherlist}>Auther List</button>
        </div>
    );
}
