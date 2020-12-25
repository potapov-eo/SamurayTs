import appReducer, {appReducerStateType, initializedSuccess} from "./app-reduser";
import authReducer from "./auth-reducer";
import {addNewMessageAC} from "./dialogs-reducer";


let initialState: appReducerStateType
beforeEach(() => {
    let initialState = {
        initialized: false
    }
})

test('SET initialized  should be correct', () => {

    const action = initializedSuccess();
    const endState = appReducer(initialState,action)

    expect(endState).toEqual({
        initialized: true
    });

})