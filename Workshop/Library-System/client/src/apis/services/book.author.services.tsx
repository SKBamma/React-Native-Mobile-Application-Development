import { Book } from '../../types/types';
import http from '../axios';

export const postBook = (data: Book) => {
    return http.post('/books', data);

};

export const getBooks = () => {
    return http.get('/books');
};