import React, { ChangeEvent, useContext, useState } from 'react';
import { IAuthor } from '../../types/types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contex/context';

export default function Addauthor() {
    const [author, setAuthor] = useState<IAuthor>({
        id: '', firstname: '', lastname: '', phone: '', email: '', address: '',
    });
    const navigate = useNavigate();
    const { authors, setAuthors } = useContext(GlobalContext);

    const handleOnchnage = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAuthor({ ...author, [name]: value });
    };

    const handleAddAuthor = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/authors`, author);
            if (res.status === 201) {
                alert('author added successfully!');
                setAuthors([...authors, res.data]);
            }
        } catch (error) {
            console.log("Unable to add new book!!");
        }
        navigate('/authorlist');
    };
    return (
        <div>

            <input placeholder='Id...' name='id' value={author.id} onChange={handleOnchnage} />
            <br />
            <input placeholder='firstname...' name='firstname' value={author.firstname} onChange={handleOnchnage} />
            <br />
            <input placeholder='lastname...' name='lastname' value={author.lastname} onChange={handleOnchnage} />
            <br />
            <input placeholder='phone...' name='phone' value={author.phone} onChange={handleOnchnage} />
            <br />
            <input placeholder='email...' name='email' value={author.email} onChange={handleOnchnage} />
            <br />
            <input placeholder='address...' name='address' value={author.address} onChange={handleOnchnage} />
            <br />
            <button type='button' onClick={handleAddAuthor}>Add Author</button>
        </div>
    );
}
