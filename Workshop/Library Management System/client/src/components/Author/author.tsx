import React, { useContext } from 'react';
import { IAuthor } from '../../types/types';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { GlobalContext } from '../../contex/context';
import { useNavigate } from 'react-router-dom';

type Props = {
    data: IAuthor;
};
export default function Author({ data }: Props) {
    const { authors, setAuthors } = useContext(GlobalContext);
    const navigate = useNavigate();
    const handleDeleteAuthor = async () => {
        const deleted = window.confirm("Are you sure to delete?");
        if (deleted) {
            const res = await axios.delete(`http://localhost:5000/authors/${data.id}`);
            if (res.status === 200) {
                let arr = authors.filter((author) => author.id !== data.id);

                alert('Author deleted succufully!');
                setAuthors(arr);
            }
        }
    };
    const navigateToUpdateAuthor = () => {
        navigate('/update-author', { state: data });
    };
    return (
        <div style={{
            borderWidth: 1, borderStyle: 'solid', margin: 10, marginLeft: 100,
            borderColor: 'black', padding: '10px', marginRight: 120, textAlign: 'center'
        }}>
            <li key={nanoid()} >
                <p>email: {data.email}</p>
                <p>Firstname: {data.firstname}</p>
                <p>Address: {data.address}</p>
            </li>
            <button type='button' onClick={navigateToUpdateAuthor}>Update</button>
            <button type='button' onClick={handleDeleteAuthor}>Delete</button>
        </div>
    );
}
