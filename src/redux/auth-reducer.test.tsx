import {
    initialStateType,
} from "./auth-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";


let initialState: initialStateType
beforeEach(() => {
    let initialState = {
        userId: 0,
        email: "",
        login: "",
        isAuth: false

    }
})

test('SET users data  should be correct', () => {
    const userId = 111
    const email = "Bob@gmail.com"
    const login = "BOBs"
    const action = setAuthUserData(userId, email, login, true, "");

    const endState = authReducer(initialState, action)


    expect(endState).toEqual({
        userId: 111,
        email: "Bob@gmail.com",
        login: "BOBs",
        isAuth: true,
        Captcha: ""
    });

})