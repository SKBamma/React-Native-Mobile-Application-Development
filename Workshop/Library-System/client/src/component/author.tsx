import React, { useContext } from 'react';
import { Author } from '../types/types';
import { GlobalContext } from './context';
import { deleteAuthorById } from '../apis/services/book.author.services';

type Props = {
    data: Author;
};
export default function Authoor({ data }: Props) {
    const { authors, setAuthors } = useContext(GlobalContext);

    const handleUpdateAuthor = () => {

    };
    const handleDeleteAuthor = async () => {
        const deleted = window.confirm("Are you sure to delete?");
        if (deleted) {
            try {
                const res = await deleteAuthorById(data);
                if (res.status === 200) {
                    let arr = authors.filter(author => author.id !== data.id);
                    setAuthors(arr);
                }
            } catch (error) {
                alert("Sorry! unable to delete.");
            }
        }
    };
    return (
        <div>
            <li key={data.id}
                style={{
                    border: 1, borderStyle: 'solid', borderColor: 'black', margin: 5,
                    textAlign: 'center', marginRight: 150, background: 'whitesmoke'
                }}>
                <p>Email: {data.email}</p>
                <p>Firstname: {data.firstname}</p>
                <p>Lastname: {data.lastname}</p>
                <p>Address: {data.address}</p>
                <button type='button' style={{ padding: 6, margin: 10 }}
                    className="btn btn-info"
                    onClick={handleUpdateAuthor}>Update Author</button>

                <button type='button' style={{ padding: 6, margin: 10 }}
                    className="btn btn-danger"
                    onClick={handleDeleteAuthor}>Delete Author</button>
            </li>
        </div>
    );
}
