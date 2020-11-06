
import {followAC, setUsersAC, unFollowAC, userReducer, usersType} from "./users-reducer";



let initialState: usersType
beforeEach(() => {
    initialState = {
        users: [
            {id: 1, followed : true, fullName:"Fray", status: "I'm the boss", location: {city: "Minsk", country: "Belarus" },photoUrl : "v"},
            {id: 2, followed : false, fullName:"Bender", status: "I'm new boss", location: {city: "Moscow", country: "Russia" },photoUrl : "v"},
            {id: 3, followed : true, fullName:"Bob", status: "I'm only Bob", location: {city: "Bobruisk", country: "Belarus" },photoUrl : "v"}
        ]
}})

test('FOLLOW user  should be correct', () => {


    const action = followAC(2);

    const endState = userReducer(initialState, action)


    expect(endState.users[1].followed).toBe(true);
    expect(endState.users[0].followed).toBe(true);

});
test('UNFOLLOW user should be correct', () => {


    const action = unFollowAC(3);

    const endState = userReducer(initialState, action)


    expect(endState.users[1].followed).toBe(false);
    expect(endState.users[2].followed).toBe(false);

});
test('set users should be correct', () => {

    const users = [{id: 4, followed : true, fullName:"JON", status: "I'm the boss", location: {city: "Minsk", country: "Belarus" },photoUrl : "v"},
        {id: 5, followed : true, fullName:"DON", status: "I'm the boss", location: {city: "Minsk", country: "Belarus" },photoUrl : "v"}]
    const action = setUsersAC(users);

    const endState = userReducer(initialState, action)


    expect(endState.users.length).toBe(5);
    expect(endState.users[3].fullName).toBe("JON");
    expect(endState.users[4].fullName).toBe("DON");
    expect(endState.users[1].fullName).toBe("Bender");
});
