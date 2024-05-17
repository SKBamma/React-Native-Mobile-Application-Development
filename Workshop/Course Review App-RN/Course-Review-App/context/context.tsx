import { createContext } from "react";
import { ICourse } from "../components/ICourse";

type IContext = {
    state: ICourse[],
    setState: (data: ICourse[]) => void;
};
export const GlobalContext = createContext<IContext>({
    state: [],
    setState: () => { }
});