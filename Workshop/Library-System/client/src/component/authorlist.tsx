import React, { useContext } from 'react';
import { GlobalContext } from './context';

export default function Authorlist() {
    const { authors } = useContext(GlobalContext);
    return (
        <div style={{
            marginLeft: "20%", border: 2,
            color: "black", textAlign: 'center'
        }}>
            <h2>Available Author list</h2>
            <ol>
                {
                    authors.map((author) => (
                        <li key={author.id}
                            style={{
                                border: 1, borderStyle: 'solid', borderColor: 'black', margin: 5,
                                textAlign: 'center', marginRight: 150, background: 'whitesmoke'
                            }}>
                            <p>Email: {author.email}</p>
                            <p>Firstname: {author.firstname}</p>
                            <p>Lastname: {author.lastname}</p>
                            <p>Address: {author.address}</p>
                        </li>
                    ))
                }
            </ol>


        </div>
    );
}
