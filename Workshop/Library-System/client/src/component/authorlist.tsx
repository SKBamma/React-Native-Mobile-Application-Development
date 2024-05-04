import React, { useContext } from 'react';
import { GlobalContext } from './context';
import { useNavigate } from 'react-router-dom';
import Authoor from './author';

export default function Authorlist() {
    const { authors } = useContext(GlobalContext);
    const navigate = useNavigate();

    const navigateToAddAuthor = () => {
        navigate('/add-auther');
    };

    const navigateToBooklist = () => {
        navigate('/');
    };

    return (
        <div style={{
            marginLeft: "20%", border: 2,
            color: "black", textAlign: 'center'
        }}>
            <h2>Available Author list</h2>
            <ol>
                {
                    authors.map((author) => (<Authoor key={author.id} data={author} />

                    ))
                }
            </ol>
            <button type='button' style={{ padding: 10, marginLeft: -250 }}
                className="btn btn-primary"
                onClick={navigateToAddAuthor}>Add Author</button>

            <button type='button' style={{ padding: 10, marginLeft: 250 }}
                className="btn btn-primary"
                onClick={navigateToBooklist}>Back 2 Booklist</button>
        </div>
    );
}
