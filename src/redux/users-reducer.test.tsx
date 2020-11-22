
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    userReducer,
    usersType
} from "./users-reducer";



let initialState: initialStateType
beforeEach(() => {
    initialState = {
        users: [
            {id: 1, followed : true, uniqueUrlName:"1", name:"Fray", status: "I'm the boss", photos : {small:"", large:""}},
            {id: 2, followed : false, uniqueUrlName:"1", name:"Bender", status: "I'm new boss", photos : {small:"", large:""}},
            {id: 3, followed : true, uniqueUrlName:"1", name:"Bob", status: "I'm only Bob", photos : {small:"", large:""}}
        ],
        pageSize:5,
        totalUsersCount:100,
        currentPage:5

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

    const users = [
        {id: 1, followed : true, uniqueUrlName:"1", name:"Fray", status: "I'm the boss", photos : {small:"", large:""}},
        {id: 2, followed : false, uniqueUrlName:"1", name:"Bender", status: "I'm new boss", photos : {small:"", large:""}}
        ]
    const action = setUsersAC(users);

    const endState = userReducer(initialState, action)


    expect(endState.users.length).toBe(2);
    expect(endState.users[0].name).toBe("Fray");
    expect(endState.users[1].name).toBe("Bender");

});
test('set currentPage should be correct', () => {

   const pageNumber = 32
    const action = setCurrentPageAC(pageNumber);

    const endState = userReducer(initialState, action)


    expect(endState.currentPage).toBe(32);
   });
test('set totalUsersCount should be correct', () => {

    const totalCount = 11
    const action = setTotalUsersCountAC(totalCount);

    const endState = userReducer(initialState, action)


    expect(endState.totalUsersCount).toBe(11);
});

