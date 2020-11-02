import React from 'react';
import store, {StoresType} from "./redux/redux-store";

type PropsRType = {
    store: StoresType
    children:any
}

const StoreContext=React.createContext({}as StoresType )

export const Provider=(props:PropsRType)=>{
  return  <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
}

export default StoreContext