import { createContext } from "react";
import { IBook } from "../types/types";

type IContext = {
    books: IBook[],
    setBooks: (booklist: IBook[]) => void;
};
export const GlobalContext = createContext<IContext>(
    {
        books: [],
        setBooks: () => { }
    }
);