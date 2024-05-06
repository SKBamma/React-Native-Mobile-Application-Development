import { createBrowserRouter } from "react-router-dom";
import Booklist from "../components/Book/booklist";
import Addbook from "../components/Book/addbook";
import { UpdateBook } from "../components/Book/updatebook";

export const routers = createBrowserRouter(
    [
        {
            path: '/',
            element: <Booklist />
        },
        {
            path: '/add-book',
            element: <Addbook />
        },
        {
            path: '/update-book',
            element: <UpdateBook />
        }
    ]
);