
import dialogsReducer, {addNewMessageAC, changeNewMessageBodyAC} from "./dialogs-reducer";
import {DialogType, MessageType} from "../components/Dialogs/Dialogs";
export type MessagePageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
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

    }
})

test('add new message should be correct', () => {
    const NewMessage= "yo"

    const action = addNewMessageAC(NewMessage);

    const endState = dialogsReducer(initialState, action)

    expect(endState.messages.length).toBe(3);
    expect(endState.messages[2].message).toBe("yo");

});