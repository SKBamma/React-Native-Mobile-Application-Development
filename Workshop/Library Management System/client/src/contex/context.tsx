import { createContext } from "react";
import { IAuthor, IBook } from "../types/types";

type IContext = {
    books: IBook[],
    setBooks: (booklist: IBook[]) => void;
    authors: IAuthor[],
    setAuthors: (updateAut: IAuthor[]) => void;
};
export const GlobalContext = createContext<IContext>(
    {
        books: [],
        setBooks: () => { },
        authors: [],
        setAuthors: () => { }
    }
);