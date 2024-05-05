import { createContext } from "react";
import { IBOOK } from "../../types/types";
type IContex = {
    books: IBOOK[],
    setBooks: (updatebook: IBOOK[]) => void;
};
export const GlobalContex = createContext<IContex>(
    {
        books: [],
        setBooks: () => { }
    }
);