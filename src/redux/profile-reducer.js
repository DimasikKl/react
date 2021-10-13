const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'hello world!', likeCount: 12},
    {id: 2, message: 'hi', likeCount: 55},
    {id: 3, message: 'hello russion!', likeCount: 0},
  ],
  newPostText: 'Dima',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () =>  ({type: ADD_POST,});
export const updateNewPostTextActionCreator = (text) =>  ({ type: UPDATE_NEW_POST_TEXT, newText: text,});

export default profileReducer;