import { Author, Book } from '../../types/types';
import http from '../axios';

export const postBook = (data: Book) => {
    return http.post('/books', data);

};

export const getBooks = () => {
    return http.get('/books');
};

export const postAuthor = (author: Author) => {
    return http.post('/authors', author);
};

export const getAuthors = () => {
    return http.get('/authors');
};