import { createContext } from 'react';
const initialState = {
    login: (user: any) => { },
    user: [],
}

export type AppContext = typeof initialState;

const Storecontext = createContext<typeof initialState>(initialState);
export default Storecontext;