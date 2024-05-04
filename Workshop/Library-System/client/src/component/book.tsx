import React, { useContext } from 'react';
import { Book } from '../types/types';
import { deleteBookById } from '../apis/services/book.author.services';
import { GlobalContext } from './context';

type Props = {
    data: Book;
};
export default function Boook({ data }: Props) {
    const { books, setBooks } = useContext(GlobalContext);
    const handleUpdateBook = () => {

    };
    const handleDeleteBook = async () => {
        const deleted = window.confirm("Are you sure to delete this book?");
        if (deleted) {
            try {
                const response = await deleteBookById(data);
                if (response.status === 200) {
                    let arr = books.filter(book => book.id !== data.id);
                    setBooks(arr);
                }
            } catch (error) {
                alert("Sorry!! Unbale to delete this book!!");
            }
        }
    };
    return (
        <div>
            <li key={data.id} style={{
                border: 1, borderStyle: 'solid', borderColor: 'black', margin: 5,
                textAlign: 'center', marginRight: 150, background: 'whitesmoke'
            }}>
                <p>Title: {data.title}</p>
                <p>Genre: {data.genre}</p>
                <p>Summary: {data.summary}</p>

                <button type='button' style={{ padding: 6, margin: 10 }}
                    className="btn btn-info"
                    onClick={handleUpdateBook}>Update Book</button>

                <button type='button' style={{ padding: 6, margin: 10 }}
                    className="btn btn-danger"
                    onClick={handleDeleteBook}>Delete Book</button>
            </li>
        </div>
    );
}
