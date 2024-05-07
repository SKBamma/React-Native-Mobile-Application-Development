import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const navigateToBooklist = () => {
        navigate('/boolist');
    };

    const navigateToAuthorlist = () => {
        navigate('/authorlist');
    };
    return (
        <div>

            <button type='button' style={{ margin: 20, padding: 8 }}
                onClick={navigateToBooklist}>Book List</button>
            <br />
            <button type='button' style={{ margin: 20, padding: 8 }}
                onClick={navigateToAuthorlist}>Author List</button>
        </div>
    );
}
