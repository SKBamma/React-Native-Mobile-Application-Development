import AddBook from "../components/Book/AddBook";
import BookList from "../components/Book/BookList";
import Updatebook from "../components/Book/updatebook";
import PageNotFound from "../components/PageNotFound/pagenotfound";

export default [
    {
        path: '/',
        element: <BookList />
    },
    {
        path: '/add-book',
        element: <AddBook />
    },
    {
        path: '/update-book',
        element: <Updatebook />
    },
    {
        path: '*',
        element: <PageNotFound />
    }
];