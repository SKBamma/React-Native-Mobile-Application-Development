import AddAuthor from "../component/addAuthors";
import Addbook from "../component/addbook";
import Authorlist from "../component/authorlist";
import BookList from "../component/booklist";

export default [
    {
        path: '/',
        element: <BookList />
    },

    {
        path: '/add-book',
        element: <Addbook />
    },

    {
        path: '/author-list',
        element: <Authorlist />
    },
    {
        path: '/add-auther',
        element: <AddAuthor />
    },

];