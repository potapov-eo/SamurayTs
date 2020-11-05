import {MessagePageType} from "./store";
import dialogsReducer, {addNewMessageAC, changeNewMessageBodyAC} from "./dialogs-reducer";

let initialState:MessagePageType
beforeEach(() => {
    initialState = {
        messages: [
            {id: 1, message: "blablabla"},
            {id: 2, message: "blablabla"}
        ],
        dialogs: [
            {id: 1, name: "Frai"},
            {id: 2, name: "Bender"}
        ],
        newMessageBody: "ManUtd"
    }
})
test('update new message should be correct', () => {


    const action = changeNewMessageBodyAC("HELLO WORD");

    const endState = dialogsReducer(initialState, action)

    expect(endState.newMessageBody).toBe("HELLO WORD");
});
test('add new message should be correct', () => {


    const action = addNewMessageAC();

    const endState = dialogsReducer(initialState, action)

    expect(endState.messages.length).toBe(3);
    expect(endState.messages[2].message).toBe("ManUtd");
    expect(endState.newMessageBody).toBe("");
});