import axios from 'axios';

import React, { useContext } from 'react';
import { IBOOK } from '../../types/types';
import { GlobalContex } from '../contex/contex';
import { useNavigate } from 'react-router-dom';

type BProps = {
    data: IBOOK;
};
export default function Book({ data }: BProps) {
    const { books, setBooks } = useContext(GlobalContex);
    const navigate = useNavigate();

    const handleDelete = async () => {
        const deletd = window.confirm("Are you sure to delete?");
        if (deletd) {
            try {
                const res = await axios.delete(`http://localhost:5000/books/${data.id}`);
                if (res.status === 200) {
                    let arr = books.filter(book => book.id !== data.id);
                    setBooks(arr);
                }
            } catch (error) {
                console.log("Unable to delete book!!");
            }
        }

    };

    const nagivateToUpdateBook = () => {
        navigate('/update-book', { state: data });
    };
    return (
        <div>
            <li style={{
                border: 3, textAlign: 'center', width: 490, height: 190, background: "lightyellow",
                borderColor: 'black', borderStyle: 'solid', padding: 10, margin: 10
            }}>
                <p>Title: {data.title}</p>
                <p>Isbn: {data.isbn}</p>
                <p>Summary: {data.summary}</p>
                < button style={{ padding: 3, margin: 10, backgroundColor: "lightblue" }}
                    onClick={nagivateToUpdateBook}>Update</button>

                <button style={{ padding: 3, margin: 10, backgroundColor: "lightblue" }}
                    onClick={handleDelete}>Delete</button>

            </li>
        </div >
    );
}
