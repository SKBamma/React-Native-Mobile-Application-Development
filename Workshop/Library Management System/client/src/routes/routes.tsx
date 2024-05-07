import { createBrowserRouter } from "react-router-dom";
import Booklist from "../components/Book/booklist";
import Addbook from "../components/Book/addbook";
import { UpdateBook } from "../components/Book/updatebook";
import Home from "../components/Home";
import Authorlist from "../components/Author/authorlist";
import Addauthor from "../components/Author/addauthor";
import PageNotFound from "../components/pageNotFound/pagenotfound";
import { UpdateAuthor } from "../components/Author/updateAuthor";

export const routers = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/boolist',
            element: <Booklist />
        },
        {
            path: '/add-book',
            element: <Addbook />
        },
        {
            path: '/update-book',
            element: <UpdateBook />
        },
        {
            path: '/authorlist',
            element: <Authorlist />
        },
        {
            path: '/add-author',
            element: <Addauthor />
        },
        {
            path: '/update-author',
            element: <UpdateAuthor />
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ]
);