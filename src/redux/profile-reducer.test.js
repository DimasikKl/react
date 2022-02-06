import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'hello world!', likeCount: 12},
        {id: 2, message: 'hi', likeCount: 55},
        {id: 3, message: 'hello russion!', likeCount: 0},
    ]
}
it('new post should be added', () => {
    let action = addPostActionCreator('Dimasik');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

it('after deleting length of message should be decrement', () => {
   let action = deletePost(1);
   let newState = profileReducer(state, action);
   expect(newState.posts.length).toBe(2);
});

it('after delete length should be decrement if id is incorrect', () => {
    let action = deletePost(10);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});