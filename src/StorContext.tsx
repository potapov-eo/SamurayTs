import React from 'react';
import {StoresType} from "./redux/redux-store";
type PropsRType = {
    store: StoresType

}

const StoreContext=React.createContext({}as StoresType )

export default StoreContext