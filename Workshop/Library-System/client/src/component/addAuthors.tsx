
import React, { ChangeEvent, useContext, useState } from 'react';
import { Author } from '../types/types';
import { postAuthor } from '../apis/services/book.author.services';
import { GlobalContext } from './context';

export default function AddAuthor() {
    const [author, setAurhor] = useState<Author>({
        id: '', firstname: '', lastname: '', phone: '', email: '', address: '',
    });
    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAurhor({ ...author, [name]: value });
    };
    const { authors, setAuthors } = useContext(GlobalContext);
    const handleAddAuthor = async () => {
        try {
            const resp = await postAuthor(author);
            if (resp.status === 201) {
                setAuthors([...authors, resp.data]);
            }

        } catch (error) {

        }
    };
    return (
        <div style={{
            marginLeft: "40%", width: 300, height: 335, border: 2,
            color: "black", background: 'green', textAlign: 'center'
        }}>
            <h1 style={{ color: 'salmon', padding: 10 }}>Add Author</h1>
            <input placeholder='Id..' name='id' value={author.id} onChange={handleOnchange}
                style={{ padding: 5, margin: 5, marginTop: 5 }} />
            <br />
            <input placeholder='Firstname..' name='firstname' value={author.firstname} onChange={handleOnchange}
                style={{ padding: 5, margin: 5, marginTop: 5 }} />
            <br />
            <input placeholder='Lastname..' name='lastname' value={author.lastname} onChange={handleOnchange}
                style={{ padding: 5, margin: 5, marginTop: 5 }} />
            <br />
            <input placeholder='Phone..' name='phone' value={author.phone} onChange={handleOnchange}
                style={{ padding: 5, margin: 5, marginTop: 5 }} />
            <br />
            <input placeholder='Email..' name='email' value={author.email} onChange={handleOnchange}
                style={{ padding: 5, margin: 5, marginTop: 5 }} />
            <br />
            <input placeholder='Address..' name='address' value={author.address} onChange={handleOnchange}
                style={{ padding: 5, margin: 5, marginTop: 5 }} />
            <br />
            <button type='button' className="btn btn-light"
                onClick={handleAddAuthor}> Add New Author</button>


        </div>
    );
}
