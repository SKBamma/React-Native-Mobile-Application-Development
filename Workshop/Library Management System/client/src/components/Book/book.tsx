import React, { useContext } from 'react';
import { IBook } from '../../types/types';
import { GlobalContext } from '../../contex/context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Props = {
    data: IBook;
};
export default function Book({ data }: Props) {

    const { books, setBooks } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handledelete = async () => {
        const deleted = window.confirm(`Are you sure to delete book?`);
        if (deleted) {
            try {
                const res = await axios.delete(`http://localhost:5000/books/${data.id}`);
                if (res.status === 200) {
                    const arr = books.filter((book) => book.id !== data.id);
                    setBooks(arr);
                }
            } catch (error) {
                console.log("unable to delete book!");
            }
        }
    };

    const navigateToUpdate = () => {
        navigate('/update-book', { state: data });
    };
    return (
        <div>
            <li style={{
                borderWidth: 1, borderStyle: 'solid', margin: 10, marginLeft: 100,
                borderColor: 'black', padding: '10px', marginRight: 120, textAlign: 'center'
            }}>
                <p>Title: {data.title}</p>
                <p>ISBN: {data.isbn}</p>
                <p>Summary: {data.summary}</p>




                <button type='button' style={{ padding: 8, margin: 10 }}
                    onClick={navigateToUpdate}>update</button>

                <button type='button' style={{ padding: 8, margin: 10 }}
                    onClick={handledelete}>delete</button>
            </li>
        </div>
    );
}
