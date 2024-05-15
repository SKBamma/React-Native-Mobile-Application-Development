import { createContext } from "react";
import { ICourse } from "../components/ICourse";

type IContext = {
    data: ICourse[],
    setData: (data: ICourse[]) => void;
};
export const GlobalContext = createContext<IContext>({
    data: [],
    setData: () => { }
});